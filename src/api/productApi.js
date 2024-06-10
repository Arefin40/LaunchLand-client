import axios, { useAxiosSecure } from "@hooks/axios";

// Get all products with pagination
export const getAll = (page = 1, limit = 6) => {
   return async () => {
      const response = await axios.get(`/products?page=${page}&limit=${limit}`);
      return response.data;
   };
};

// Get product by ID
export const getById = (id) => {
   return async () => {
      const response = await axios.get(`/products/${id}`);
      return response.data;
   };
};

// Get featured products
export const getFeatured = () => {
   return async () => {
      const response = await axios.get(`/products/featured`);
      return response.data;
   };
};

// Get trending products
export const getTrending = () => {
   return async () => {
      const response = await axios.get(`/products/trending`);
      return response.data;
   };
};

// Get rising products
export const getRising = () => {
   return async () => {
      const response = await axios.get(`/products/rising`);
      return response.data;
   };
};

// Get product queue (moderator only)
export const getProductQueue = () => {
   const axiosSecure = useAxiosSecure();
   return async () => {
      const response = await axiosSecure.get(`/products/queue`);
      return response.data;
   };
};

// Create a product
export const create = () => {
   const axiosSecure = useAxiosSecure();
   return async (data) => {
      const response = await axiosSecure.post("/products", data);
      return response.data;
   };
};

// Update product info
export const update = () => {
   const axiosSecure = useAxiosSecure();
   return async ({ id, data }) => {
      const response = await axiosSecure.patch(`/products/${id}`, data);
      return response.data;
   };
};

// Delete a product
export const remove = () => {
   const axiosSecure = useAxiosSecure();
   return async (id) => {
      const response = await axiosSecure.delete(`/products/${id}`);
      return response.data;
   };
};

// Upvote a product
export const upvote = () => {
   const axiosSecure = useAxiosSecure();
   return async (id) => {
      const response = await axiosSecure.patch(`/products/${id}/upvote`);
      return response.data;
   };
};

// Accept/Reject a product
export const changeStatus = () => {
   const axiosSecure = useAxiosSecure();
   return async ({ id, status }) => {
      const response = await axiosSecure.patch(`/products/${id}/status`, { status });
      return response.data;
   };
};

// Feature a product
export const feature = () => {
   const axiosSecure = useAxiosSecure();
   return async (id) => {
      const response = await axiosSecure.patch(`/products/${id}/feature`);
      return response.data;
   };
};

// Report a product
export const report = () => {
   const axiosSecure = useAxiosSecure();
   return async (id) => {
      const response = await axiosSecure.patch(`/products/${id}/report`);
      return response.data;
   };
};

// Get all reported products
export const getReportedProducts = () => {
   const axiosSecure = useAxiosSecure();
   return async () => {
      const response = await axiosSecure.get(`/products/reports`);
      return response.data;
   };
};
