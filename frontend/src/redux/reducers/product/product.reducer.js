import ProductActionTypes from './product.types';

const INITIAL_STATE = {
  products: [],
  loading: false,
<<<<<<< HEAD
=======
  error: null,
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
};

export const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
<<<<<<< HEAD
      return {
        loading: true,
        products: [],
      };
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return {
=======
      return { ...state, loading: true };
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case ProductActionTypes.PRODUCT_LIST_FAILURE:
<<<<<<< HEAD
      return {
        loading: false,
        error: action.payload,
      };
=======
      return { ...state, loading: false, error: action.payload };
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DELETE_REQUEST:
<<<<<<< HEAD
      return {
        loading: true,
      };
    case ProductActionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ProductActionTypes.PRODUCT_DELETE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
=======
      return { loading: true };
    case ProductActionTypes.PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ProductActionTypes.PRODUCT_DELETE_FAILURE:
      return { loading: false, error: action.payload };
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_CREATE_REQUEST:
<<<<<<< HEAD
      return {
        loading: true,
      };
    case ProductActionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    case ProductActionTypes.PRODUCT_CREATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
=======
      return { loading: true };
    case ProductActionTypes.PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ProductActionTypes.PRODUCT_CREATE_FAILURE:
      return { loading: false, error: action.payload };
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    case ProductActionTypes.PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_UPDATE_REQUEST:
<<<<<<< HEAD
      return {
        loading: true,
      };
    case ProductActionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    case ProductActionTypes.PRODUCT_UPDATE_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
=======
      return { loading: true };
    case ProductActionTypes.PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ProductActionTypes.PRODUCT_UPDATE_FAILURE:
      return { loading: false, error: action.payload };
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    case ProductActionTypes.PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case ProductActionTypes.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case ProductActionTypes.PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductActionTypes.PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
