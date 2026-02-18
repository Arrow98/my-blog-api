import React from "react";
import "./subscribeSection.css";
import { motion } from "framer-motion";

export function SubscribeSection() {
  return (
    <div className="subscribeSection-box">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="subscribe-box"
      >
        <div className="subscribe-header">Stay in the Loop</div>
        <div className="subscribe-info">
          Join thousands of developers who receive our weekly newsletter with
          the latest articles, tutorials, and industry insights.
        </div>
        <div className="subscribe-input-box">
          <input
            type="text"
            className="subscribe-input"
            placeholder="Enter your email address"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="subscribe-button"
          >
            Subscribe Now
          </motion.button>
        </div>
        <div className="subscribe-footer">
          No spam, unsubscribe at any time. We respect your privacy.
        </div>
      </motion.div>
    </div>
  );
}

