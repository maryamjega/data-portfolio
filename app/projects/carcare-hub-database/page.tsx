'use client';

import { useEffect } from 'react';
import './carcare-hub.css';

export default function CarCareHub() {
  useEffect(() => {
    // Cursor animation
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.left = (mx - 6) + 'px';
        cursor.style.top = (my - 6) + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animRing = () => {
      rx += (mx - rx - 20) * 0.12;
      ry += (my - ry - 20) * 0.12;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      requestAnimationFrame(animRing);
    };

    animRing();

    // Scroll reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.classList.add('visible');
          }, i * 80);
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach(r => obs.observe(r));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <nav>
        <div className="nav-links">
          <a href="#schema">Schema</a>
          <a href="#decisions">Decisions</a>
          <a href="#sql">SQL</a>
          <a href="#normalisation">3NF</a>
          <a href="#process">Process</a>
        </div>
        <a href="/projects" className="nav-back">← Back to Projects</a>
      </nav>

      <section className="hero" id="overview">
        <div className="hero-bg">
          <div className="hero-orb orb1"></div>
          <div className="hero-orb orb2"></div>
        </div>

        <div className="hero-left">
          <div className="hero-tag">E-Commerce Data Modeling</div>
         <h1>Retail<br /><span className="line2">Data System.</span></h1>
          <p className="hero-desc">
          A structured relational database built from a real-world e-commerce dataset. Designed to model customers, orders, products, payments, and reviews, with clean joins and data organisation enabling clear, business-level insights across the marketplace.
          </p>
          <div className="hero-ctas">
            <a href="#schema" className="btn-primary">Explore Schema →</a>
            <a href="#decisions" className="btn-secondary">Design Decisions</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="float-card float-card-1">
            <div className="float-label">DATA MODEL</div>
            <div className="float-value green">Normalized</div>
            <div className="float-sub">No redundancy</div>
          </div>

          <div className="db-mockup">
            <div className="db-titlebar">
              <div className="db-dot r"></div>
              <div className="db-dot y"></div>
              <div className="db-dot g"></div>
              <span className="db-filename">carcare_hub.sql</span>
            </div>
            <div className="db-body">
              <div className="db-table">
                <div className="db-table-head">Customers</div>
                <div className="db-row"><span className="pk">cust_id</span><span className="type">PK · SERIAL</span></div>
                <div className="db-row"><span>cust_fname</span><span className="type">VARCHAR(50)</span></div>
                <div className="db-row"><span>cust_email</span><span className="type">UNIQUE</span></div>
                <div className="db-row"><span>cust_phone_num</span><span className="type">UNIQUE</span></div>
              </div>
              <div className="db-arrow">↕</div>
              <div className="db-table">
                <div className="db-table-head">Cars</div>
                <div className="db-row"><span className="pk">car_id</span><span className="type">PK · SERIAL</span></div>
                <div className="db-row"><span className="fk">cust_id</span><span className="type">FK → Customers</span></div>
                <div className="db-row"><span className="fk">car_model_id</span><span className="type">FK → Models</span></div>
                <div className="db-row"><span>car_condition</span><span className="type">ENUM</span></div>
              </div>
              <div className="db-arrow">↕</div>
              <div className="db-table">
                <div className="db-table-head">Service Appointments</div>
                <div className="db-row"><span className="pk">serv_app_id</span><span className="type">PK · SERIAL</span></div>
                <div className="db-row"><span className="fk">car_id</span><span className="type">FK → Cars</span></div>
                <div className="db-row"><span>serv_app_status</span><span className="type">ENUM</span></div>
                <div className="db-row"><span>serv_app_time</span><span className="type">CHECK 09–17</span></div>
              </div>
            </div>
          </div>

          <div className="float-card float-card-2">
            <div className="float-label">Tables Designed</div>
            <div className="float-value" style={{ fontSize: '14px', color: 'var(--white)' }}>9 Normalized</div>
            <div className="float-sub">PostgreSQL · ERD · SQL</div>
          </div>
        </div>
      </section>

      <div className="stats reveal">
        <div className="stat"><div className="stat-number">9<span>×</span></div><div className="stat-label">Normalized relational tables</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">3<span>NF</span></div><div className="stat-label">Third Normal Form achieved</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">4<span>×</span></div><div className="stat-label">ERD design iterations</div></div>
        <div className="stat-divider"></div>
        <div className="stat"><div className="stat-number">40<span>+</span></div><div className="stat-label">Hours of design work</div></div>
      </div>

      <section id="schema" className="light-section">
        <div className="section-tag reveal">Schema</div>
        <h2 className="reveal">9 tables.<br />Fully Connected.</h2>
        <p className="section-desc reveal">
         Every entity in the marketplace mapped to a clean, normalized schema from customers and orders through to products, payments, sellers, and structured reviews.
        </p>

        <div className="schema-grid reveal">
          {[
            { name: 'Customers', fields: [{ label: 'customer_id', badge: 'PK', type: 'pk' }, { label: 'customer_unique_id', badge: 'UNIQUE' }, { label: 'cust_zip_code_prefix', badge: 'VARCHAR(10)' }, { label: 'customer_state', badge: 'CHAR(2)' }, ] },
            { name: 'Orders', fields: [{ label: 'order_id', badge: 'PK', type: 'pk' }, { label: 'customer_id', badge: 'FK', type: 'fk' }, { label: 'order_status', badge: 'VARCHAR(20)'}, { label: 'order_timestamp', badge: 'DATETIME' }, { label: 'order_approved_at', badge: 'DATETIME' }, { label: 'order_delivered_carrier_date', badge: 'DATETIME' }, { label: 'order_delivered_customer_date', badge: 'DATETIME' }, { label: 'order_estimated_delivery_date', badge: 'DATETIME' }] },
            { name: 'Order Item', fields: [{ label: 'order_id', badge: 'FK', type: 'fk' }, { label: 'order_item_id', badge: 'PK', type: 'pk' }, { label: 'product_id', badge: 'FK', type: 'fk' }, { label: 'seller_id', badge: 'FK', type: 'fk' }, { label: 'shipping_limit_date', badge: 'DATETIME' }, { label: 'price', badge: 'DECIMAL(10,2)' }, { label: 'freight_value', badge: 'DECIMAL(10,2)' }] },
            { name: 'Payments', fields: [{ label: 'order_id', badge: 'FK', type: 'fk' }, { label: 'payment_sequential', badge: 'INT'}, { label: 'payment_type', badge: 'ENUM' }, { label: 'payment_installments', badge: 'INT' }, { label: 'payment_value', badge: 'DECIMAL(10,2)' }] },
            { name: 'Reviews', fields: [{ label: 'review_id', badge: 'PK', type: 'pk' }, { label: 'order_id', badge: 'FK', type: 'fk' }, { label: 'review_score', badge: 'TINYINT' }, { label: 'review_comment_title', badge: 'VARCHAR(255)' }, { label: 'review_comment_message', badge: 'TEXT' }] },
            { name: 'Products', fields: [{ label: 'product_id', badge: 'PK', type: 'pk' }, { label: 'product_category_name', badge: 'VARCHAR(100)' }, { label: 'product_name_len', badge: 'INT' }, { label: 'product_desc_len', badge: 'INT' }, { label: 'product_photos_qty', badge: 'INT' }, { label: 'product_weight_g', badge: 'INT' }, { label: 'product_height_cm', badge: 'INT' }, { label: 'product_width_cm', badge: 'INT' }] },
            { name: 'Sellers', fields: [{ label: 'seller_id', badge: 'PK', type: 'pk' }, { label: 'seller_zip_code_prefix', badge: 'VARCHAR(10)' }, { label: 'seller_city', badge: 'VARCHAR(100)' }, { label: 'seller_state', badge: 'CHAR(2)' }] },
            { name: 'Geolocation', fields: [{ label: 'geo_zip_code_prefix', badge: 'VARCHAR(10)' }, { label: 'geolocation_lat', badge: 'DECIMAL(10,8)' }, { label: 'geolocation_lng', badge: 'DECIMAL(10,8)' }, { label: 'geolocation_city', badge: 'VARCHAR(100)' }, { label: 'geolocation_state', badge: 'CHAR(2)' }] },
            { name: 'Category Name Translation', fields: [{ label: 'prod_category_name', badge: 'VARCHAR(100)' }, { label: 'prod_category_name_eng', badge: 'VARCHAR(100)' }]}
          ].map((table) => (
            <div key={table.name} className="schema-table">
              <div className="schema-accent-bar"></div>
              <div className="schema-table-name">{table.name}</div>
              {table.fields.map((field, idx) => (
                <div key={idx} className="schema-field">
                  <span className={`fn ${field.type || ''}`}>{field.label}</span>
                  <span className={`badge ${field.type || ''}`}>{field.badge}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="decisions" className="decisions-section">
        <div className="section-tag reveal">Design Decisions</div>
        <h2 className="reveal">Designed for<br/>insight.</h2>
        <p className="section-desc reveal">
         Refined across iterations to improve data integrity, remove redundancy, and strengthen relationships across the marketplace.
        </p>

        <div className="features-layout reveal">
          <div className="feature-block accent-block">
            <div className="feature-num">01</div>
            <div className="feature-tag">Structure</div>
            <div className="feature-title">Orders centralized as the core fact table</div>
            <div className="feature-desc">Orders act as the backbone of the system, linking customers, payments, items, and reviews into a single, consistent flow for analysis.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">02</div>
            <div className="feature-tag">Normalization</div>
            <div className="feature-title">Customer and product data separated to reduce redundancy</div>
            <div className="feature-desc">Repeated attributes were isolated into dedicated tables, ensuring cleaner joins and eliminating duplication across transactions.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">03</div>
            <div className="feature-tag">Analytical Design</div>
            <div className="feature-title">Order-level and item-level data split for accuracy</div>
            <div className="feature-desc">Distinct views of orders and items prevent double-counting and allow precise revenue, product, and customer analysis.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">04</div>
            <div className="feature-tag">Category Standardization</div>
            <div className="feature-title">Product categories translated into a unified format</div>
            <div className="feature-desc">Raw category labels were mapped to consistent, readable values, improving clarity and enabling meaningful grouping in analysis.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">05</div>
            <div className="feature-tag">Data Integrity</div>
            <div className="feature-title">Flexible data types used to handle real-world variation</div>
            <div className="feature-desc">TVARCHAR and DECIMAL types were used to accommodate inconsistent formats across IDs, locations, and monetary values without breaking structure.</div>
          </div>
          <div className="feature-block">
            <div className="feature-num">06</div>
            <div className="feature-tag">Relationships</div>
            <div className="feature-title">Foreign key relationships enforce consistency across tables</div>
            <div className="feature-desc">Clear links between customers, orders, products, sellers, and payments ensure reliable joins and a fully connected data model.</div>
          </div>
        </div>
      </section>

      <section id="sql" className="light-section">
        <div className="section-tag reveal">Implementation</div>
        <h2 className="reveal">SQL that<br/>powers insight.</h2>
        <p className="section-desc reveal">
        Relationships, joins, and structured views built directly into the data model enabling accurate revenue, customer, and product analysis without relying on application logic.
        </p>

        <div className="sql-window reveal">
          <div className="sql-titlebar">
            <div className="sql-dot r"></div><div className="sql-dot y"></div><div className="sql-dot g"></div>
            <span className="sql-filename">carcare_hub.sql PostgreSQL</span>
          </div>
          <div className="sql-body">
            <pre>{`-- Service Appointments with CHECK constraint
CREATE TABLE service_appointments (
  serv_app_id     SERIAL   PRIMARY KEY,
  car_id          INT      NOT NULL,
  serv_app_status VARCHAR
    CHECK (serv_app_status IN (
    'Scheduled', 'In Progress',
    'Completed', 'Cancelled'
  ))                          NOT NULL,
  serv_app_date   DATE     NOT NULL,
  serv_app_time   TIME     NOT NULL
    CHECK (serv_app_time
      BETWEEN '09:00:00'
      AND     '17:00:00'),
  FOREIGN KEY (car_id)
    REFERENCES cars(car_id)
);`}</pre>
            <pre>{`-- Feedback with structured ratings
CREATE TABLE feedback (
  feedback_id      SERIAL  PRIMARY KEY,
  cust_id          INT     NOT NULL,
  staff_id         INT     NOT NULL,
  feedback_comment TEXT,
  feedback_ratings VARCHAR
    CHECK (feedback_ratings IN (
    'Very Poor', 'Poor',
    'Average', 'Good',
    'Excellent'
  ))                          NOT NULL,
  feedback_date    DATE    NOT NULL,
  FOREIGN KEY (cust_id)
    REFERENCES customers(cust_id),
  FOREIGN KEY (staff_id)
    REFERENCES staff(staff_id)
);`}</pre>
          </div>
        </div>
      </section>

      <section id="normalisation" className="normalisation-section">
        <div className="section-tag reveal">Normalisation</div>
        <h2 className="reveal">No redundancy.<br/>No anomalies.</h2>
        <p className="section-desc reveal">
          Every table verified against the three normal form rules atomic values, full functional dependency, and no transitive dependencies.
        </p>

        <div className="norm-grid reveal">
          <div className="norm-card">
            <div className="norm-nf">1NF</div>
            <div className="norm-title">First Normal Form</div>
            <div className="norm-body">All attributes contain atomic values. No repeating groups or multi-valued fields in any table.</div>
            <div className="norm-item">Each column holds a single value</div>
            <div className="norm-item">All rows uniquely identifiable via PK</div>
            <div className="norm-item">No arrays or nested data structures</div>
          </div>
          <div className="norm-card">
            <div className="norm-nf">2NF</div>
            <div className="norm-title">Second Normal Form</div>
            <div className="norm-body">All non-key attributes depend fully on the entire primary key no partial dependencies exist.</div>
            <div className="norm-item">Car details separated from Customer data</div>
            <div className="norm-item">Service details not stored in appointments</div>
            <div className="norm-item">Intersection tables resolve many-to-many</div>
          </div>
          <div className="norm-card">
            <div className="norm-nf">3NF</div>
            <div className="norm-title">Third Normal Form</div>
            <div className="norm-body">No transitive dependencies. Every non-key attribute depends only on the primary key, nothing else.</div>
            <div className="norm-item">Manufacturer extracted from Car_Models</div>
            <div className="norm-item">Department data not duplicated in Staff</div>
            <div className="norm-item">Invoice details not duplicated in Payment</div>
          </div>
        </div>
      </section>

      <section id="process" className="light-section">
        <div className="section-tag reveal">Process</div>
        <h2 className="reveal">Iterated.<br/>Refined.</h2>
        <p className="section-desc reveal">
          Developed across two design iterations each building on the feedback and shortcomings of the previous version.
        </p>

        <div className="timeline reveal">
          <div className="timeline-item">
            
            <div className="timeline-title">Initial Planning & Case Study Review</div>
            <div className="timeline-desc">Analysed CarCare Hub business requirements. Identified all entities, relationships, and initial assumptions. Each team member designed an independent ERD draft before group consolidation into a single model.</div>
          </div>
          <div className="timeline-item">
            
            <div className="timeline-title">ERD Design & Data Dictionary</div>
            <div className="timeline-desc">Produced the first full ERD with 13 tables, resolved many-to-many relationships using intersection tables, and completed a comprehensive data dictionary covering all attributes, data types, and constraints.</div>
          </div>
          <div className="timeline-item">
            
            <div className="timeline-title">ERD Redesign After Feedback</div>
            <div className="timeline-desc">Reviewed earlier feedback and redesigned the ERD. Key changes: extracted Car_Models, replaced boolean availability with Schedule, introduced Feedback_Handling, corrected ENUM notations, and simplified payment structure to 15 tables.</div>
          </div>
          <div className="timeline-item">
            
            <div className="timeline-title">SQL Implementation & Debugging</div>
            <div className="timeline-desc">Wrote full CREATE TABLE statements, INSERT data, and tested with SELECT/JOIN queries. Debugged constraint violations, foreign key dependencies, and data type mismatches in practical sessions.</div>
          </div>
          <div className="timeline-item">
            
            <div className="timeline-title">Reflective Analysis & Final Submission</div>
            <div className="timeline-desc">Documented all design decisions, compared and contrasted both ERD versions, and wrote a structured reflective analysis covering removals, additions, cardinality corrections, and constraint improvements.</div>
          </div>
        </div>
      </section>

      <footer className="light">
        <div className="footer-left">
          <h3>Maryam Bashir Jega</h3>
          <p>MSc Data Science · Middlsex University Dubai</p>
          <p style={{ marginTop: '4px', fontSize: '12px', color: '#444' }}>Database Systems Development</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/maryamjega/" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:maryamjega@outlook.com">Contact</a>
        </div>
      </footer>
    </>
  );
}
