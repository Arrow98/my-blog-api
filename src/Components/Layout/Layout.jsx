import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { motion } from "framer-motion";

export const Layout = () => {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ minHeight: "calc(100vh - 150px)" }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
};
