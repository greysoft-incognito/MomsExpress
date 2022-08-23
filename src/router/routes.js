const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "Homepage",
        component: () => import("pages/Homepage.vue"),
      },
      {
        path: "/login",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/loginn",
        component: () => import("pages/Auth/Login.vue"),
      },
      {
        path: "/vendorOnboard",
        component: () => import("pages/Auth/VendorOnboard.vue"),
      },
      {
        path: "/register",
        component: () => import("pages/Auth/Register.vue"),
      },
      {
        path: "/vendor_page",
        component: () => import("pages/SingleVendorPage.vue"),
      },
      {
        path: "/category",
        component: () => import("pages/SingleCategoryPage.vue"),
      },
      {
        path: "/cart",
        component: () => import("pages/CartPage.vue"),
      },
      {
        path: "/checkout",
        component: () => import("pages/CheckoutPage.vue"),
      },
      {
        path: "/account",
        component: () => import("pages/BuyerPages/AccountPage.vue"),
      },
      {
        path: "/product_detail",
        component: () => import("pages/ProductDetailPage.vue"),
      },
      {
        path: "/become_a_vendor",
        component: () => import("pages/VendorLandingPage.vue"),
      },
    ],
  },
  {
    path: "/vendor",
    component: () => import("layouts/VendorLayout.vue"),
    children: [
      {
        path: "/vendor",
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
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "/admin",
        name: "Dashboard",
        component: () => import("src/pages/AdminPages/DashboardPage.vue"),
      },
      {
        path: "categories",
        name: "Categories",
        component: () => import("src/pages/AdminPages/CategoriesPage.vue"),
      },
      {
        path: "user_detail",
        name: "User Detail",
        component: () =>
          import("src/pages/AdminPages/SingleUserDetailsPage.vue"),
      },
      {
        path: "buyers",
        name: "Buyers",
        component: () => import("src/pages/AdminPages/BuyersPage.vue"),
      },
      {
        path: "vendors",
        name: "Vendors",
        component: () => import("src/pages/AdminPages/SellersPage.vue"),
      },
      {
        path: "issues",
        name: "Issues",
        component: () => import("src/pages/AdminPages/IssuesPage.vue"),
      },
      {
        path: "marketing",
        name: "Marketing",
        component: () => import("src/pages/AdminPages/MarketingPage.vue"),
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
