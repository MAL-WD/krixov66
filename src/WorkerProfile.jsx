import React from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import logo from './assets/Logo.png';

// بيانات عامل تجريبية ثابتة
const worker = {
  id: "worker-001",
  name: "محمد علي أحمد",
  phone: "0111222333",
  email: "mohamed.ali@email.com",
  position: "عامل تنظيف محترف",
  experience: "خبرة 5 سنوات في تنظيف المنازل والمكاتب والفلل. متخصص في التنظيف العميق والتعقيم",
  message: "أرغب في الانضمام لفريق KRIXO المتميز. لدي خبرة واسعة في مجال التنظيف وأتميز بالدقة والموثوقية. أعمل بجد وألتزم بمواعيد العمل بدقة.",
  isAccepted: true,
  createdAt: "2024-01-13T09:15:00Z",
  skills: ["تنظيف المنازل", "تنظيف المكاتب", "التعقيم", "تنظيف السجاد", "تنظيف النوافذ"],
  languages: ["العربية", "الإنجليزية"],
  availability: "متاح للعمل بدوام كامل",
  salary: "2000-2500 دج شهرياً",
  location: "القاهرة - مصر الجديدة"
};

const WorkerProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      <Toaster position="top-center" />
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <img src={logo} alt="KRIXO" className="w-10 h-10" />
              <h1 className="text-xl font-bold text-white">ملف العامل - KRIXO</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-yellow-500 px-8 py-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-blue-600">
                  {worker?.name?.charAt(0)}
                </span>
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-bold">{worker?.name}</h2>
                <p className="text-blue-100 font-medium">{worker?.position}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-md ${
                    worker?.isAccepted === true ? 'bg-green-500 text-white' :
                    worker?.isAccepted === false ? 'bg-red-500 text-white' :
                    'bg-yellow-500 text-white'
                  }`}>
                    {worker?.isAccepted === true ? 'مقبول' :
                     worker?.isAccepted === false ? 'مرفوض' : 'في الانتظار'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-200 pb-2">
                  المعلومات الشخصية
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">الاسم الكامل</label>
                    <p className="text-lg text-gray-900 font-medium">{worker?.name}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">البريد الإلكتروني</label>
                    <p className="text-lg text-gray-900 font-medium">{worker?.email}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">رقم الهاتف</label>
                    <p className="text-lg text-gray-900 font-medium">{worker?.phone}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">المنصب المطلوب</label>
                    <p className="text-lg text-gray-900 font-medium">{worker?.position}</p>
                  </div>
                </div>
              </div>
              {/* Professional Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-yellow-200 pb-2">
                  المعلومات المهنية
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">الخبرة المهنية</label>
                    <p className="text-gray-900 bg-white p-3 rounded-lg border border-gray-200 font-medium">
                      {worker?.experience}
                    </p>
                  </div>
                  {worker?.skills && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">المهارات</label>
                      <div className="flex flex-wrap gap-2">
                        {worker.skills.map((skill, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {worker?.languages && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">اللغات</label>
                      <div className="flex flex-wrap gap-2">
                        {worker.languages.map((language, index) => (
                          <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {worker?.availability && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">التوفر</label>
                      <p className="text-lg text-gray-900 font-medium">{worker.availability}</p>
                    </div>
                  )}
                  {worker?.salary && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">الراتب المطلوب</label>
                      <p className="text-lg text-gray-900 font-medium">{worker.salary}</p>
                    </div>
                  )}
                  {worker?.location && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">الموقع</label>
                      <p className="text-lg text-gray-900 font-medium">{worker.location}</p>
                    </div>
                  )}
                  {worker?.message && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">رسالة إضافية</label>
                      <p className="text-gray-900 bg-white p-3 rounded-lg border border-gray-200 font-medium">
                        {worker?.message}
                      </p>
                    </div>
                  )}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">تاريخ التقديم</label>
                    <p className="text-lg text-gray-900 font-medium">
                      {new Date(worker?.createdAt).toLocaleDateString('ar-SA')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Status Information */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">حالة الطلب</h3>
              {worker?.isAccepted === true && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800">تم قبول طلبك!</h4>
                      <p className="text-green-700 font-medium">
                        مرحباً بك في فريق KRIXO. سيتم التواصل معك قريباً لبدء العمل.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {worker?.isAccepted === false && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800">لم يتم قبول طلبك</h4>
                      <p className="text-red-700 font-medium">
                        نعتذر، لم نتمكن من قبول طلبك في الوقت الحالي. يمكنك التقديم مرة أخرى لاحقاً.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {worker?.isAccepted === null && (
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800">طلبك قيد المراجعة</h4>
                      <p className="text-yellow-700 font-medium">
                        نحن نراجع طلبك حالياً. سيتم إشعارك بالنتيجة قريباً.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default WorkerProfile;