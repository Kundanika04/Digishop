import ProductActionTypes from './product.types';
import axios from 'axios';
import { logout } from '../user/user.actions';

<<<<<<< HEAD
export const listProducts =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ProductActionTypes.PRODUCT_LIST_FAILURE,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_DELETE_REQUEST,
    });
=======
// Action to list products with optional search keywords and pagination
export const listProducts = (keyword = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
    
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Action to delete a product
export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_DELETE_REQUEST });

>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    await axios.delete(`/api/products/${id}`, config);
<<<<<<< HEAD
    dispatch({
      type: ProductActionTypes.PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_DELETE_FAILURE,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
=======
    
    dispatch({ type: ProductActionTypes.PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_DELETE_FAILURE,
      payload: error.response?.data?.message || error.message,
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    });
  }
};

<<<<<<< HEAD


export const createProduct = (formData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_CREATE_REQUEST,
    });
=======
// Action to create a new product
export const createProduct = (productData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_CREATE_REQUEST });
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
<<<<<<< HEAD
        'Content-Type': 'multipart/form-data', // Set content type to handle file upload
=======
        'Content-Type': 'application/json', // Updated to JSON instead of multipart/form-data
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

<<<<<<< HEAD
    // Send the formData containing product details and image
    const { data } = await axios.post(`/api/products`, formData, config);
    
=======
    // Send productData as a JSON object
    const { data } = await axios.post(`/api/products`, productData, config);

>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    dispatch({
      type: ProductActionTypes.PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_CREATE_FAILURE,
<<<<<<< HEAD
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
=======
      payload: error.response?.data?.message || error.message,
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    });
  }
};

<<<<<<< HEAD

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ProductActionTypes.PRODUCT_UPDATE_REQUEST,
    });
=======
// Action to update an existing product
export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_UPDATE_REQUEST });

>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
<<<<<<< HEAD
      'Content-Type': 'application/json',
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );
=======
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/products/${product._id}`, product, config);
    
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    dispatch({
      type: ProductActionTypes.PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_UPDATE_FAILURE,
<<<<<<< HEAD
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
=======
      payload: error.response?.data?.message || error.message,
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    });
  }
};

<<<<<<< HEAD
export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

=======
// Action to create a product review
export const createProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_CREATE_REVIEW_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(`/api/products/${productId}/reviews`, review, config);

    dispatch({ type: ProductActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS });
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: ProductActionTypes.PRODUCT_CREATE_REVIEW_FAIL,
      payload: message,
    });
  }
};

// Action to list top-rated products
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_TOP_REQUEST });

    const { data } = await axios.get(`/api/products/top`);
<<<<<<< HEAD

=======
    
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    dispatch({
      type: ProductActionTypes.PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_TOP_FAIL,
<<<<<<< HEAD
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
=======
      payload: error.response?.data?.message || error.message,
>>>>>>> 021e542cefde1da78efe0a36373062ff4cf67396
    });
  }
};
