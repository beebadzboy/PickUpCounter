export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Pickup Counter']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Receive',
        to: '/pickup/receive',
        icon: 'cil-car-alt'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Issue',
        to: '/pickup/issue/ctake',
        icon: 'cil-grid',
        items: [{
          name: 'Customer Take',
          to: '/pickup/issue/ctake'
        },
        {
          name: 'Edit Customer Take',
          to: '/pickup/issue/editctake'
        },
        {
          name: 'Return & Refund & Resale',
          to: '/pickup/issue/resale'
        }]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Cancel Issue',
        to: '/pickup/cancelissue',
        icon: 'cil-grid-slash'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Transfer Relocate Packing',
        to: '/pickup/transfer',
        icon: 'cil-transfer'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Refund Return by Claimcheck',
        to: '/pickup/refund',
        icon: 'cil-money'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Unlock Shopping Card',
        to: '/theme/typography',
        icon: 'cil-lock-unlocked'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Report']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'กศก',
        to: '/theme/typography',
        icon: 'cil-spreadsheet'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'ใบนำส่งสินค้าปลอดอากร',
        to: '/theme/typography',
        icon: 'cil-spreadsheet'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'กศก 62 - 1',
        to: '/theme/typography',
        icon: 'cil-spreadsheet'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'End of Day',
        to: '/theme/typography',
        icon: 'cil-spreadsheet'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Sale Status',
        to: '/theme/typography',
        icon: 'cil-spreadsheet'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Refund Report',
        to: '/theme/typography',
        icon: 'cil-spreadsheet'
      }
    ]
  }
]