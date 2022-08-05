const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // {
      //   path: "",
      //   name: "Home",
      //   component: () => import("src/pages/AdminPages/DashboardPage.vue"),
      // },
      // {
      //   path: "categories",
      //   name: "Categories",
      //   component: () => import("src/pages/AdminPages/CategoriesPage.vue"),
      // },
      // {
      //   path: "user_detail",
      //   name: "User Detail",
      //   component: () =>
      //     import("src/pages/AdminPages/SingleUserDetailsPage.vue"),
      // },
      // {
      //   path: "buyers",
      //   name: "Buyers",
      //   component: () => import("src/pages/AdminPages/BuyersPage.vue"),
      // },
      // {
      //   path: "vendors",
      //   name: "Vendors",
      //   component: () => import("src/pages/AdminPages/SellersPage.vue"),
      // },
      // {
      //   path: "issues",
      //   name: "Issues",
      //   component: () => import("src/pages/AdminPages/IssuesPage.vue"),
      // },
      // {
      //   path: "marketing",
      //   name: "Marketing",
      //   component: () => import("src/pages/AdminPages/MarketingPage.vue"),
      // },

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
        name: "Transaction HIstory",
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
        path: "product_detail",
        name: " Product Detail",
        component: () => import("src/pages/VendorPages/ProductDetails.vue"),
      },
      {
        path: "offers",
        component: () => import("src/pages/VendorPages/MarketingOfferPage.vue"),
      },
      {
        path: "settings",
        name: "Settings",
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
