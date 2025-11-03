const express = require('express');
const router = express.Router();
const { notifications } = require('../data/notifications');

// Get all notifications
router.get('/', (req, res) => {
  const { type, read, priority } = req.query;
  
  let filteredNotifications = [...notifications];

  // Filter by type
  if (type) {
    filteredNotifications = filteredNotifications.filter(n => n.type === type);
  }

  // Filter by read status
  if (read !== undefined) {
    const isRead = read === 'true';
    filteredNotifications = filteredNotifications.filter(n => n.read === isRead);
  }

  // Filter by priority
  if (priority) {
    filteredNotifications = filteredNotifications.filter(n => n.priority === priority);
  }

  // Sort by date (newest first)
  filteredNotifications.sort((a, b) => new Date(b.date) - new Date(a.date));

  res.json({
    success: true,
    total: filteredNotifications.length,
    unreadCount: notifications.filter(n => !n.read).length,
    notifications: filteredNotifications
  });
});

// Get notification by ID
router.get('/:id', (req, res) => {
  const notification = notifications.find(n => n.id === req.params.id);
  
  if (!notification) {
    return res.status(404).json({
      success: false,
      message: 'Notification not found'
    });
  }

  res.json({
    success: true,
    notification
  });
});

// Mark notification as read
router.put('/:id/read', (req, res) => {
  const notification = notifications.find(n => n.id === req.params.id);
  
  if (!notification) {
    return res.status(404).json({
      success: false,
      message: 'Notification not found'
    });
  }

  notification.read = true;

  res.json({
    success: true,
    message: 'Notification marked as read',
    notification
  });
});

// Mark all notifications as read
router.put('/read-all', (req, res) => {
  notifications.forEach(n => n.read = true);

  res.json({
    success: true,
    message: 'All notifications marked as read'
  });
});

// Delete notification
router.delete('/:id', (req, res) => {
  const index = notifications.findIndex(n => n.id === req.params.id);
  
  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Notification not found'
    });
  }

  notifications.splice(index, 1);

  res.json({
    success: true,
    message: 'Notification deleted'
  });
});

module.exports = router;
