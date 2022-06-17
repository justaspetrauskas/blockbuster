import React, { lazy, Suspense } from "react";
// redux
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

// import ErrorPage from "./pages/ErrorPage/ErrorPage";
// import SingleProgramPage from "./pages/SingleProgramPage/SingleProgram";
// import Wishlist from "./pages/Wishlist/Wishlist";
// import MoviesPage from "./pages/MoviePage/MoviesPage";
// import ProgramsByGenre from "./pages/GenrePage/GenrePage";

// import ContentWrapper from "./components/General/ContentWrapper/ContentWrapper";

import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/Footer";
import Loader from "./components/General/Loader/Loader";

const LazyWishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const LazyProgramsByGenre = lazy(() => import("./pages/GenrePage/GenrePage"));
const LazyMoviesPage = lazy(() => import("./pages/MoviePage/MoviesPage"));
const LazySingleProgramPage = lazy(
  () => import("./pages/SingleProgramPage/SingleProgram")
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />} />
          {/* show movies */}
          <Route
            path="/movies"
            element={
              <Suspense fallback={<Loader />}>
                <LazyMoviesPage />
              </Suspense>
            }
          />
          <Route
            path="movies/:programId"
            element={
              <Suspense fallback={"loading component should be here"}>
                <LazySingleProgramPage />
              </Suspense>
            }
          />
          <Route
            path="movies/genre/:genre"
            element={
              <Suspense fallback={"loading component should be here"}>
                <LazyProgramsByGenre />
              </Suspense>
            }
          />
          {/* show series */}

          {/* show wishlist */}
          <Route
            path="/wishlist"
            element={
              <Suspense fallback={"loading component should be here"}>
                <LazyWishlist />
              </Suspense>
            }
          />

          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>

        <FooterComponent />
      </Router>
    </Provider>
  );
}

export default App;
