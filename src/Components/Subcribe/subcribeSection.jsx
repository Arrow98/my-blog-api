import React from "react";
import "./subscribeSection.css";

export function SubscribeSection() {
  return (
    <div className="subscribeSection-box">
      <div className="subscribe-box">
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
          <button className="subscribe-button">Subscribe Now</button>
        </div>
        <div className="subscribe-footer">
          No spam, unsubscribe at any time. We respect your privacy.
        </div>
      </div>
    </div>
  );
}
