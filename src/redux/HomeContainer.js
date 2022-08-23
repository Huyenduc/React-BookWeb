
import { connect } from "react-redux"

import { addToCart } from "./actions/action"
import ProductDetail from "../Page/Product/ProductDetail"

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data =>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail)
