import React from 'react';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen"> {/* Changed to white background */}
        {/* Main Introduction Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white"> {/* Updated background color */}
          <h1 className="text-4xl font-bold text-blue-900 sm:text-5xl md:text-6xl mb-6"> {/* Updated text color */}
            Welcome to PalsAnalytix
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            PalsAnalytix is a unique Exam Preparation platform that provides comprehensive support for CFA Level 1, FRM Level 1, and SCR® exams. Whether you’re a student or a working professional, we have the tools to help you succeed.
            <br />
            Our innovative testing framework, personalized resources, and 10,000+ practice questions ensure you are fully prepared to tackle your exams with confidence and ease.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            You can receive daily questions via WhatsApp, Telegram, or email. Manage your performance with instant results, track your progress over time, and dive into mock exams tailored to your specific needs. With PalsAnalytix, exam preparation has never been this effective.
          </p>
          <button className="mt-8 bg-[#FEE154] text-black px-8 py-3 rounded-lg hover:bg-yellow-500"> {/* Button color maintained */}
            Get Started Today
          </button>
        </section>

        {/* Why Choose PalsAnalytix Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 text-center"> {/* Updated background color */}
          <h2 className="text-3xl font-semibold text-blue-900 mb-6"> {/* Updated text color */}
            Why Choose PalsAnalytix?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            At PalsAnalytix, we focus on making exam preparation stress-free, efficient, and highly personalized to fit your learning style. Here's why thousands of students and professionals trust us for their exam journey:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Daily Topic-based Questions</h3>
              <p className="mt-4 text-gray-600">
                Select specific topics that you want to focus on, and receive daily practice questions to help you master each section. Our questions are curated to reinforce learning, making sure you cover every important aspect of your exam syllabus.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Instant Results & Detailed Feedback</h3>
              <p className="mt-4 text-gray-600">
                Don’t just answer questions—learn from them! With instant grading and detailed explanations, you can see where you went wrong, helping you improve with each attempt. We help turn your mistakes into learning opportunities.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">10,000+ Questions & Mock Exams</h3>
              <p className="mt-4 text-gray-600">
                Access a vast library of questions covering every chapter and difficulty level. With our full-length mock exams, simulate the real exam environment to boost your confidence and exam-day readiness. Mock exams are timed and come with a performance review to help track your progress.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Choose Your Preferred Platform</h3>
              <p className="mt-4 text-gray-600">
                Whether you prefer to practice on WhatsApp, Telegram, via email, or on our user-friendly web platform, we provide flexibility so you can fit studying into your busy schedule. Choose the number of questions and topics you want to receive each day.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Comprehensive Performance Tracking</h3>
              <p className="mt-4 text-gray-600">
                Stay on track with our detailed performance analytics. We break down your scores across different topics, track your progress over time, and provide personalized insights on areas needing improvement. Our goal is to keep you improving steadily until exam day.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">Reduce Exam Stress</h3>
              <p className="mt-4 text-gray-600">
                One of the best ways to reduce exam anxiety is consistent practice. Our platform is designed to help you tackle more questions every day, building confidence and reducing stress as the exam approaches. We make preparation less overwhelming, one step at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Course Offerings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Our Courses</h2> {/* Updated text color */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">CFA</h3>
              <p className="mt-4 text-gray-600">
                The Chartered Financial Analyst (CFA) credential is one of the most respected investment management designations.
              </p>
              <button className="mt-6 bg-[#FEE154] text-black px-6 py-2 rounded-lg hover:bg-yellow-500"> {/* Button color maintained */}
                Learn More
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">FRM</h3>
              <p className="mt-4 text-gray-600">
                The Financial Risk Manager (FRM) certification is globally recognized as a gold standard for risk management.
              </p>
              <button className="mt-6 bg-[#FEE154] text-black px-6 py-2 rounded-lg hover:bg-yellow-500"> {/* Button color maintained */}
                Learn More
              </button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900">SCR</h3>
              <p className="mt-4 text-gray-600">
                The Sustainability and Climate Risk (SCR) certification equips professionals with knowledge on navigating climate risk and ESG factors.
              </p>
              <button className="mt-6 bg-[#FEE154] text-black px-6 py-2 rounded-lg hover:bg-yellow-500"> {/* Button color maintained */}
                Learn More
              </button>
            </div>
          </div>
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
