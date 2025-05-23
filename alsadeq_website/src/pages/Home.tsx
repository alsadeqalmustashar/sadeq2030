import React from 'react';
import '../App.css';

const Home: React.FC = () => {
  return (
    <div className="rtl:text-right" dir="rtl">
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">الصادق المستشار</h1>
            <p className="text-xl md:text-2xl mb-8">خدمات استشارية متكاملة لتطوير أعمالك</p>
            <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">خدماتنا المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* بطاقة الخدمة الأولى */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* رمز الخدمة */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">الاستشارات المالية</h3>
              <p className="text-gray-600 text-center">
                نقدم خدمات استشارية مالية متكاملة لمساعدة شركتك على تحقيق النمو المستدام وتحسين الأداء المالي.
              </p>
            </div>

            {/* بطاقة الخدمة الثانية */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* رمز الخدمة */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">تطوير الأعمال</h3>
              <p className="text-gray-600 text-center">
                نساعدك في تطوير استراتيجيات النمو وتحسين العمليات التجارية لتحقيق أهداف شركتك بكفاءة عالية.
              </p>
            </div>

            {/* بطاقة الخدمة الثالثة */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* رمز الخدمة */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">الاستشارات الإدارية</h3>
              <p className="text-gray-600 text-center">
                نوفر حلولاً إدارية متكاملة تساعد في تحسين الهيكل التنظيمي وتطوير الكفاءات الإدارية في مؤسستك.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">لماذا تختارنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">خبرة واسعة</h3>
              <p className="text-gray-600">
                نمتلك فريقاً من الخبراء المتخصصين في مختلف المجالات لتقديم أفضل الحلول المناسبة لاحتياجات عملك.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">حلول مخصصة</h3>
              <p className="text-gray-600">
                نقدم حلولاً مخصصة تناسب احتياجات عملك الفريدة، ونعمل معك عن قرب لضمان تحقيق النتائج المرجوة.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">نتائج ملموسة</h3>
              <p className="text-gray-600">
                نركز على تحقيق نتائج ملموسة وقابلة للقياس تساهم في نمو أعمالك وتحسين أدائها بشكل مستدام.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">دعم مستمر</h3>
              <p className="text-gray-600">
                نقدم دعماً مستمراً لعملائنا ونتابع معهم خطوة بخطوة لضمان تنفيذ الاستراتيجيات والحلول بنجاح.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">تواصل معنا اليوم</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تطوير أعمالك وتحقيق أهدافك. تواصل معنا اليوم للحصول على استشارة مجانية.
          </p>
          <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition duration-300">
            احجز استشارة مجانية
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
