const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("src/pages/VendorPages/DashboardPage.vue"),
      },
      {
        path: "customers",
        name: "Customers",
        component: () => import("src/pages/VendorPages/CustomersPage.vue"),
      },
      {
        path: "orders",
        name: "Orders",
        component: () => import("src/pages/VendorPages/OrdersPage.vue"),
      },
      {
        path: "transaction_history",
        component: () =>
          import("src/pages/VendorPages/TransactionHistoryPage.vue"),
      },
      {
        path: "products",
        name: "All Products",
        component: () => import("src/pages/VendorPages/AllProductsPage.vue"),
      },
      {
        path: "new_product",
        name: "Add New Product",
        component: () => import("src/pages/VendorPages/NewProductPage.vue"),
      },
      {
        path: "offers",
        component: () => import("src/pages/VendorPages/MarketingOfferPage.vue"),
      },
      {
        path: "settings",
        component: () => import("src/pages/VendorPages/StoreSettingsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
