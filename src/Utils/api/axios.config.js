import axios from "axios";
import { toast } from "react-toastify";

// Axios instance
const apiInstance = axios.create({
  baseURL:  `https://backend-arm.sysstocksn.com${process.env.REACT_APP_API_BACKEND_VERSION}`,
  timeout: 11000,
});

// Request handler
const requestHandler = (request) => {
  // // Automaticaly append the token to the header
  // let token = localStorage.getItem("token");
  // if (token !== null || token !== "") {
  //   request.headers.Authorization = `Token ${token}`;
  // } else {
  //   delete request.headers.Authorization;
  // }
  return request;
};

// Response handler
const responseHandler = (response) => {
  if (response.status === 401) {
    localStorage.clear();
    toast.error("Session termine. Reconnectez-vous!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    delete apiInstance.defaults.headers.common["Authorization"];
    window.location("/connexion");
  }
  return response;
};

// Error handler
const errorHandler = (error) => {
  return Promise.reject(error);
};

// Append the response and request handler to axios instance interceptors
apiInstance.interceptors.request.use(
  (request) => {
    // Automaticaly append the token to the header
    let token = localStorage.getItem("token");
    if (token === null || token === "") {
      delete request.headers.Authorization;
    } else {
      request.headers.Authorization = `Token ${token}`;
    }
    return requestHandler(request);
  },
  (error) => {
    return errorHandler(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.token !== undefined) {
    }
    return responseHandler(response);
  },
  (error) => {
    if (error?.code === "ECONNABORTED") {
      toast.error("Request timeout (Requette annulé car prend trop de temps)", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
    switch (error.response.status) {
      case 401:
        localStorage.clear();
        delete apiInstance.defaults.headers.common["Authorization"];
        toast.error(error.response?.data?.detail, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        const myTimeOut = setTimeout(() => {}, 3000);
        clearTimeout(myTimeOut);
        window.location = "/connexion";
        return errorHandler(error);
      case 500:
        error.response.message =
          "Oups erreur liée au serveur!\nContactez l'administrateur\n" +
          "Requete: \n" +
          " Method: " +
          error.response?.config?.method +
          "\n Url: " +
          error.response?.config?.url;
        toast.error(error.response.message, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        return errorHandler(error);
      case 400:
        // toast.error(JSON.stringify(error.response?.data), {
        //   position: "bottom-center",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: false,
        //   progress: undefined,
        // });

        return errorHandler(error);
      case 403:
        toast.error(error.response?.data?.detail, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        return errorHandler(error);
      default:
        return errorHandler(JSON.stringify(error.response?.data));
    }
  }
);

export default apiInstance;
