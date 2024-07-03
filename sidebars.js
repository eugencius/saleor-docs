const backToHome = {
  type: "ref",
  id: "index",
  label: "<- Back to home",
  className: "menu__backlink",
  customProps: {
    sidebar_is_backlink: true,
    sidebar_icon: "back-arrow",
  },
};

module.exports = {
  main: [
    {
      type: "doc",
      id: "index",
      label: "Overview",
    },
    {
      type: "category",
      label: "Quickstart",
      items: [
        "quickstart/cloud",
        "quickstart/running-locally",
        "quickstart/api",
        "quickstart/storefront",
      ],
    },
    {
      type: "category",
      label: "Why Saleor",
      items: [
        "overview/why-saleor/headless",
        "overview/why-saleor/composable",
        "overview/why-saleor/extensibility",
        "overview/why-saleor/open-source",
        "overview/why-saleor/graphql",
        "overview/why-saleor/saas-self-host",
        "overview/why-saleor/scalable",
        "overview/why-saleor/multi-market",
      ],
    },

    {
      type: "html",
      value: "Product",
      className: "menu__group-label",
    },

    {
      type: "ref",
      label: "Cloud",
      id: "cloud",
    },
    { type: "ref", id: "developer/index" },

    {
      type: "html",
      value: "API",
      customProps: {
        sidebar_is_group_divider: true,
      },
      className: "menu__group-label",
    },

    { type: "ref", id: "api-reference/api-reference" },
    { type: "ref", label: "GraphQL", id: "api-usage/overview" },

    {
      type: "html",
      value: "Customizing",
      className: "menu__group-label",
    },
    { type: "ref", label: "Apps", id: "developer/app-store/overview" },
    {
      type: "ref",
      label: "Building apps",
      id: "developer/extending/apps/overview",
    },
    { type: "ref", label: "Extending", id: "developer/extending/overview" },
    {
      type: "html",
      value: "Additional resources",
      className: "menu__group-label",
    },

    {
      type: "ref",
      label: "Self-hosting",
      id: "setup/overview",
    },
    {
      type: "ref",
      label: "Community",
      id: "developer/community/contributing",
    },
  ],
  concepts: [
    backToHome,
    "developer/index",
    { type: "html", value: "<hr/>" },
    {
      type: "category",
      label: "Channels",
      collapsible: false,
      items: [
        "developer/channels/overview",
        "developer/channels/configuration",
        "developer/channels/lifecycle",
        "developer/channels/troubleshooting",
        "developer/channels/api",
      ],
    },
    {
      type: "category",
      label: "Products",
      collapsible: false,
      items: [
        "developer/products/overview",
        "developer/products/configuration",
        "developer/products/lifecycle",
        "developer/products/troubleshooting",
        "developer/products/cookbook",
        "developer/products/api",
      ],
    },
    {
      type: "category",
      label: "Attributes",
      collapsible: false,
      items: [
        "developer/attributes/overview",
        "developer/attributes/configuration",
        "developer/attributes/lifecycle",
        "developer/attributes/api",
      ],
    },
    {
      type: "category",
      label: "Checkout and Orders",
      collapsible: false,
      items: [
        "developer/checkout/overview",
        "developer/checkout/lines",
        "developer/checkout/stock",
        "developer/checkout/address",
        "developer/checkout/problems",
        "developer/checkout/finalizing",
        "developer/checkout/order-to-checkout",
        "developer/checkout/order-status",
        "developer/checkout/payment-status",
        "developer/checkout/order-expiration",
      ],
    },
    {
      type: "category",
      label: "Checkout and Orders",
      collapsible: false,
      items: [
        "developer/checkout/overview",
        "developer/checkout/lines",
        "developer/checkout/stock",
        "developer/checkout/address",
        "developer/checkout/problems",
        "developer/checkout/finalizing",
        "developer/checkout/order-to-checkout",
        "developer/checkout/order-status",
        "developer/checkout/payment-status",
        "developer/checkout/order-expiration",
      ],
    },
    "developer/payments",
    "developer/stock-allocation",
    {
      type: "category",
      label: "Discounts",
      collapsible: false,
      items: [
        "developer/discounts/overview",
        "developer/discounts/promotions",
        "developer/discounts/vouchers",
        "developer/discounts/sales",
      ],
    },
    "developer/gift-cards",
    "developer/address",
    "developer/users",
    "developer/permissions",
    "developer/taxes",
    "developer/thumbnails",
    {
      type: "category",
      label: "Importing and Exporting Data",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Importing Data",
          collapsible: false,
          items: [
            {
              type: "autogenerated",
              dirName: "developer/bulks",
            },
          ],
        },
        {
          type: "category",
          label: "Exporting Data",
          collapsible: false,
          items: [
            {
              type: "autogenerated",
              dirName: "developer/export",
            },
          ],
        },
      ],
    },
  ],
  appStore: [
    backToHome,
    "developer/app-store/overview",
    {
      type: "category",
      label: "Adyen",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "developer/app-store/apps/adyen",
        },
      ],
    },
    {
      type: "category",
      label: "Avalara AvaTax",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "developer/app-store/apps/avatax",
        },
      ],
    },
    "developer/app-store/apps/crm",
    {
      type: "category",
      label: "Emails and Messages",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "developer/app-store/apps/emails-and-messages",
        },
      ],
    },
    "developer/app-store/apps/cms",
    "developer/app-store/apps/invoices",
    "developer/app-store/apps/product-feed",
    "developer/app-store/apps/segment",
    "developer/app-store/apps/search",
    {
      type: "category",
      label: "SMTP",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "developer/app-store/apps/smtp",
        },
      ],
    },
    { type: "html", value: "<hr/>" },
    {
      type: "category",
      label: "Legacy Plugins",
      items: [
        "developer/app-store/legacy-plugins/admin-emails",
        "developer/app-store/legacy-plugins/adyen",
        "developer/app-store/legacy-plugins/dummy-credit-card",
        "developer/app-store/legacy-plugins/stripe",
        "developer/app-store/legacy-plugins/oidc",
        "developer/app-store/legacy-plugins/np-atobarai",
        "developer/app-store/legacy-plugins/user-emails",
      ],
    },
  ],
  buildingApps: [
    backToHome,
    {
      type: "autogenerated",
      dirName: "developer/extending/apps",
    },
  ],
  graphql: [
    backToHome,
    {
      type: "autogenerated",
      dirName: "api-usage",
    },

    "developer/extending/apollo-federation",
  ],
  api: [
    backToHome,
    {
      type: "autogenerated",
      dirName: "api-reference",
    },
  ],
  extending: [
    backToHome,
    "developer/extending/overview",
    { type: "autogenerated", dirName: "developer/extending/webhooks" },
  ],
  selfHosting: [
    backToHome,
    "setup/overview",
    "setup/docker-compose",
    "setup/docker-images",
    "setup/configuration",
    "setup/read-replicas",
    "setup/windows",
    {
      type: "category",
      label: "Development",
      items: [
        "developer/running-saleor/debugging-emails",
        "developer/running-saleor/exposing-instance",
      ],
    },
    {
      type: "category",
      label: "Deploying",
      items: [
        "setup/deploy-do",
        "setup/deploy-kubernetes",
        "setup/deploy-linux",
      ],
    },
    {
      type: "category",
      label: "Monitoring",
      items: ["setup/monitoring-jaeger", "setup/monitoring-sentry"],
    },
    {
      type: "category",
      label: "Storing Files",
      items: ["setup/media-gcs", "setup/media-s3"],
    },
    {
      type: "category",
      label: "Upgrade Guides",
      items: [
        "setup/upgrading",
        {
          type: "autogenerated",
          dirName: "upgrade-guides",
        },
      ],
    },
  ],
  community: [
    backToHome,
    "developer/community/contributing",
    "developer/community/zero-downtime-migrations",
    "developer/community/faq",
    "developer/community/support",
  ],
  cloud: [
    backToHome,
    "cloud",
    { type: "ref", id: "quickstart/cloud" },
    "restricting-api-access",
  ],
};
