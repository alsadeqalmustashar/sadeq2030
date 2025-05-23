import React from 'react';
import '../App.css';

const About: React.FC = () => {
  return (
    <div className="rtl:text-right" dir="rtl">
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-xl md:text-2xl mb-8">تعرف على فريقنا وقصة نجاحنا في تقديم الاستشارات المتميزة</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
              <p className="text-gray-600 mb-4">
                تأسست شركة الصادق المستشار بهدف تقديم خدمات استشارية متميزة تساعد الشركات والمؤسسات على تحقيق النمو المستدام وتطوير أعمالها. منذ تأسيسنا، عملنا مع العديد من العملاء في مختلف القطاعات، وساهمنا في تحقيق نجاحات كبيرة من خلال تقديم حلول مبتكرة ومخصصة تناسب احتياجات كل عميل.
              </p>
              <p className="text-gray-600 mb-4">
                نؤمن في الصادق المستشار بأن نجاح عملائنا هو نجاحنا، ولذلك نحرص على بناء علاقات طويلة الأمد مع عملائنا تقوم على الثقة والشفافية والالتزام بتقديم أفضل الخدمات. نعمل بشكل وثيق مع عملائنا لفهم احتياجاتهم وتحدياتهم، ونقدم لهم الحلول المناسبة التي تساعدهم على تحقيق أهدافهم.
              </p>
              <p className="text-gray-600">
                تتميز شركتنا بفريق من الخبراء المتخصصين في مختلف المجالات، يمتلكون خبرات واسعة ومهارات عالية تمكنهم من تقديم استشارات متميزة تساهم في تطوير أعمال عملائنا وتحقيق نتائج ملموسة.
              </p>
            </div>

            {/* مكان للصورة أو الفيديو */}
            <div className="mb-16 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">صورة أو فيديو عن الشركة</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">رؤيتنا</h2>
              <p className="text-gray-600">
                نسعى لأن نكون الشريك الاستشاري الأول للشركات والمؤسسات في المنطقة، من خلال تقديم خدمات استشارية متميزة تساهم في تحقيق النمو المستدام وتطوير الأعمال.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">رسالتنا</h2>
              <p className="text-gray-600">
                تقديم حلول استشارية مبتكرة ومخصصة تلبي احتياجات عملائنا وتساعدهم على مواجهة التحديات وتحقيق أهدافهم، من خلال فريق من الخبراء المتخصصين وباستخدام أحدث الأساليب والممارسات العالمية.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">قيمنا</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">الجودة</h3>
                  <p className="text-gray-600">
                    نلتزم بتقديم خدمات استشارية عالية الجودة تلبي توقعات عملائنا وتتجاوزها.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">النزاهة</h3>
                  <p className="text-gray-600">
                    نعمل بشفافية ونزاهة في جميع تعاملاتنا مع العملاء والشركاء.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">الابتكار</h3>
                  <p className="text-gray-600">
                    نسعى دائماً لتطوير حلول مبتكرة تساعد عملائنا على تحقيق التميز والنجاح.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">الالتزام</h3>
                  <p className="text-gray-600">
                    نلتزم بتحقيق نتائج ملموسة لعملائنا ونعمل معهم حتى تحقيق أهدافهم.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">فريقنا</h2>
              <p className="text-gray-600 mb-8">
                يضم فريقنا نخبة من الخبراء المتخصصين في مختلف المجالات، يمتلكون خبرات واسعة ومهارات عالية تمكنهم من تقديم استشارات متميزة تساهم في تطوير أعمال عملائنا.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* عضو الفريق الأول */}
                <div className="text-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold">الاسم الأول</h3>
                  <p className="text-gray-600">المدير التنفيذي</p>
                </div>
                {/* عضو الفريق الثاني */}
                <div className="text-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold">الاسم الثاني</h3>
                  <p className="text-gray-600">مدير الاستشارات المالية</p>
                </div>
                {/* عضو الفريق الثالث */}
                <div className="text-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold">الاسم الثالث</h3>
                  <p className="text-gray-600">مدير تطوير الأعمال</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">انضم إلى قائمة عملائنا المميزين</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            نحن فخورون بالعمل مع العديد من الشركات والمؤسسات الرائدة. تواصل معنا اليوم لتكون جزءاً من قصص النجاح.
          </p>
          <button className="bg-blue-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition duration-300">
            تواصل معنا
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
