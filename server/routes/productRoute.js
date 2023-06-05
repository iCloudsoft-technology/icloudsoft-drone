const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview,
    getAdminProducts,
    upload
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();
// router.post("/upload", require("../controllers/productController").upload.single('Images'), async(req, res) => {
//     console.log(req.body);
//     const abc = await res;
//     console.log("h3", abc)
//     res.json("ok")
// })

// router.route("/upload").post(upload.single('Images'), (req, res) => {
//     console.log(req.body);
//     console.log("h3")
//     res.json("ok")
// });

router.route("/products").get(getAllProducts);

router
    .route("/admin/products")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router
    .route("/admin/product/new")
    .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
    .route("/reviews")
    .get(getProductReviews)
    .delete(isAuthenticatedUser, deleteReview);

module.exports = router;