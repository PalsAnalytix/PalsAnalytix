import React from 'react';
import Img1 from "../assets/landing_page1.jpg"
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
    
    <div className="bg-gray-50">
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center h-screen" 
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark Overlay */}

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Welcome to PalsAnalytix
          </h1>
          <p className="mt-4 text-lg text-white sm:text-xl max-w-md mx-auto">
            Your ultimate CFA, FRM, and SCR preparation hub.
          </p>
          <button className="mt-6 bg-[#FEE154] text-black px-8 py-3 rounded-lg hover:bg-yellow-500">
            Get Started
          </button>
        </div>
      </section>


      {/* About CFA, FRM, SCR Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Why Choose PalsAnalytix?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">CFA</h3>
            <p className="mt-4 text-gray-600">
              The Chartered Financial Analyst (CFA) credential is the most respected and recognized investment management designation.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">FRM</h3>
            <p className="mt-4 text-gray-600">
              Financial Risk Manager (FRM) is the leading certification for risk managers globally, recognized by top employers.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">SCR</h3>
            <p className="mt-4 text-gray-600">
              The Sustainability and Climate Risk (SCR) certification enables professionals to navigate climate risk and ESG factors.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Choose Your Plan</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 2-Month Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">2 Month Subscription</h3>
            <p className="mt-4 text-gray-600">$49.99</p>
            <ul className="mt-6 text-gray-600">
              <li>Access to all CFA levels</li>
              <li>Mock exams</li>
              <li>Video lessons</li>
            </ul>
            <button className="mt-6 bg-[#FEE154] text-black px-8 py-3 rounded-lg hover:bg-yellow-500">
              Subscribe
            </button>
          </div>
          {/* 6-Month Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">6 Month Subscription</h3>
            <p className="mt-4 text-gray-600">$99.99</p>
            <ul className="mt-6 text-gray-600">
              <li>Access to all CFA levels</li>
              <li>FRM content</li>
              <li>SCR certification prep</li>
              <li>Mock exams</li>
              <li>Video lessons</li>
            </ul>
            <button className="mt-6 bg-[#FEE154] text-black px-8 py-3 rounded-lg hover:bg-yellow-500">
              Subscribe
            </button>
          </div>
          {/* Yearly Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">Yearly Subscription</h3>
            <p className="mt-4 text-gray-600">$149.99</p>
            <ul className="mt-6 text-gray-600">
              <li>Access to all certifications (CFA, FRM, SCR)</li>
              <li>All mock exams</li>
              <li>Priority support</li>
              <li>Video lessons</li>
            </ul>
            <button className="mt-6 bg-[#FEE154] text-black px-8 py-3 rounded-lg hover:bg-yellow-500">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Razorpay Integration Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <h2 className="text-3xl font-semibold text-gray-900">Secure Payment with Razorpay</h2>
        <p className="mt-4 text-gray-600">
          Easily complete your subscription with Razorpay. Coming soon!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">&copy; 2024 PalsAnalytix. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default LandingPage;
