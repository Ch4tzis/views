import { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Separator } from './components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { FeatureCard } from './components/FeatureCard';
import { Clock, UserCheck, AlertCircle, Users, FileCheck, Mail, Lock, Languages } from 'lucide-react';
import logo from 'figma:asset/a420554e346f2c366fa6de6d104c4ba5a7a3723a.png';

type Language = 'en' | 'el';

const translations = {
  en: {
    welcome: 'Welcome back',
    signIn: 'Sign In',
    register: 'Register',
    createAccount: 'Create your account',
    signInSubtitle: 'Sign in to your account to continue',
    registerSubtitle: 'Get started with ErganEase today',
    email: 'Email address',
    password: 'Password',
    confirmPassword: 'Confirm password',
    fullName: 'Full name',
    companyName: 'Company name',
    forgot: 'Forgot?',
    signInButton: 'Sign in',
    registerButton: 'Create account',
    continueWith: 'Or continue with',
    google: 'Google',
    apple: 'Apple',
    noAccount: "Don't have an account?",
    haveAccount: 'Already have an account?',
    signUp: 'Sign Up',
    featuresTitle: 'Everything you need to manage your workforce',
    featuresSubtitle: 'Powerful features to help you comply with labor laws and manage employee schedules efficiently.',
    feature1Title: 'Change of Working Hours',
    feature1Desc: 'Easily modify and adjust employee working hours with a flexible scheduling system.',
    feature2Title: 'Entry-Exit Movement Management',
    feature2Desc: 'Track and manage employee attendance at both individual and company-wide levels.',
    feature3Title: 'Arrival & Departure Warnings',
    feature3Desc: 'Automated alerts for correct employee arrival and departure times, protecting your business from errors.',
    feature4Title: 'Accountant Access',
    feature4Desc: 'Free access to the service for your accountant, enabling seamless collaboration.',
    feature5Title: 'Built-in Labor Law Controls',
    feature5Desc: 'Automated compliance checks when creating or modifying schedules according to labor legislation.',
    footerCopyright: '© 2025 ErganEase. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact'
  },
  el: {
    welcome: 'Καλώς ήρθατε πίσω',
    signIn: 'Σύνδεση',
    register: 'Εγγραφή',
    createAccount: 'Δημιουργήστε τον λογαριασμό σας',
    signInSubtitle: 'Συνδεθείτε στον λογαριασμό σας για να συνεχίσετε',
    registerSubtitle: 'Ξεκινήστε με το ErganEase σήμερα',
    email: 'Διεύθυνση email',
    password: 'Κωδικός πρόσβασης',
    confirmPassword: 'Επιβεβαίωση κωδικού',
    fullName: 'Ονοματεπώνυμο',
    companyName: 'Όνομα εταιρείας',
    forgot: 'Ξεχάσατε;',
    signInButton: 'Σύνδεση',
    registerButton: 'Δημιουργία λογαριασμού',
    continueWith: 'Ή συνεχίστε με',
    google: 'Google',
    apple: 'Apple',
    noAccount: 'Δεν έχετε λογαριασμό;',
    haveAccount: 'Έχετε ήδη λογαριασμό;',
    signUp: 'Εγγραφή',
    featuresTitle: 'Όλα όσα χρειάζεστε για τη διαχείριση του προσωπικού σας',
    featuresSubtitle: 'Ισχυρές δυνατότητες για να συμμορφώνεστε με την εργατική νομοθεσία και να διαχειρίζεστε αποτελεσματικά τα προγράμματα εργαζομένων.',
    feature1Title: 'Αλλαγή Ωραρίου Εργασίας',
    feature1Desc: 'Τροποποιήστε εύκολα το ωράριο εργασίας των εργαζομένων με ευέλικτο σύστημα προγραμματισμού.',
    feature2Title: 'Διαχείριση Κινήσεων Εισόδου-Εξόδου',
    feature2Desc: 'Παρακολουθήστε και διαχειριστείτε την παρουσία εργαζομένων σε ατομικό και εταιρικό επίπεδο.',
    feature3Title: 'Προειδοποιήσεις Άφιξης & Αναχώρησης',
    feature3Desc: 'Αυτοματοποιημένες ειδοποιήσεις για τους σωστούς χρόνους άφιξης και αναχώρησης, προστατεύοντας την επιχείρησή σας από λάθη.',
    feature4Title: 'Πρόσβαση Λογιστή',
    feature4Desc: 'Δωρεάν πρόσβαση στην υπηρεσία για τον λογιστή σας, επιτρέποντας απρόσκοπτη συνεργασία.',
    feature5Title: 'Ενσωματωμένοι Έλεγχοι Εργατικής Νομοθεσίας',
    feature5Desc: 'Αυτοματοποιημένοι έλεγχοι συμμόρφωσης κατά τη δημιουργία ή τροποποίηση προγραμμάτων σύμφωνα με την εργατική νομοθεσία.',
    footerCopyright: '© 2025 ErganEase. Όλα τα δικαιώματα διατηρούνται.',
    privacy: 'Πολιτική Απορρήτου',
    terms: 'Όροι Χρήσης',
    contact: 'Επικοινωνία'
  }
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'el' : 'en');
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in with:', email, password);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register with:', { fullName, companyName, email, password });
  };

  const features = [
    {
      icon: Clock,
      title: t.feature1Title,
      description: t.feature1Desc
    },
    {
      icon: UserCheck,
      title: t.feature2Title,
      description: t.feature2Desc
    },
    {
      icon: AlertCircle,
      title: t.feature3Title,
      description: t.feature3Desc
    },
    {
      icon: Users,
      title: t.feature4Title,
      description: t.feature4Desc
    },
    {
      icon: FileCheck,
      title: t.feature5Title,
      description: t.feature5Desc
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="ErganEase Logo" className="h-16" />
            </div>
            <Button 
              variant="outline" 
              size="icon"
              onClick={toggleLanguage}
              className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
            >
              <Languages className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Auth Section */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="signin" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">
                    {t.signIn}
                  </TabsTrigger>
                  <TabsTrigger value="register" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">
                    {t.register}
                  </TabsTrigger>
                </TabsList>

                {/* Sign In Tab */}
                <TabsContent value="signin">
                  <div className="mb-6">
                    <h1 className="text-[#1E293B] mb-2">{t.welcome}</h1>
                    <p className="text-gray-600">{t.signInSubtitle}</p>
                  </div>

                  <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email" className="text-[#1E293B]">{t.email}</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 border-gray-300 focus:border-[#2563EB] focus:ring-[#60A5FA]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="signin-password" className="text-[#1E293B]">{t.password}</Label>
                        <button type="button" className="text-[#2563EB] hover:text-[#60A5FA] transition-colors">
                          {t.forgot}
                        </button>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="signin-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 border-gray-300 focus:border-[#2563EB] focus:ring-[#60A5FA]"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-[#10B981] hover:bg-[#059669] text-white">
                      {t.signInButton}
                    </Button>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <Separator className="my-6" />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">
                        {t.continueWith}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <Button variant="outline" type="button" className="w-full border-gray-300 hover:border-[#2563EB]">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        {t.google}
                      </Button>
                      <Button variant="outline" type="button" className="w-full border-gray-300 hover:border-[#2563EB]">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        {t.apple}
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Register Tab */}
                <TabsContent value="register">
                  <div className="mb-6">
                    <h1 className="text-[#1E293B] mb-2">{t.createAccount}</h1>
                    <p className="text-gray-600">{t.registerSubtitle}</p>
                  </div>

                  <form onSubmit={handleRegister} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullname" className="text-[#1E293B]">{t.fullName}</Label>
                      <Input
                        id="fullname"
                        type="text"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="border-gray-300 focus:border-[#2563EB] focus:ring-[#60A5FA]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyname" className="text-[#1E293B]">{t.companyName}</Label>
                      <Input
                        id="companyname"
                        type="text"
                        placeholder="Acme Inc."
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="border-gray-300 focus:border-[#2563EB] focus:ring-[#60A5FA]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email" className="text-[#1E293B]">{t.email}</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 border-gray-300 focus:border-[#2563EB] focus:ring-[#60A5FA]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password" className="text-[#1E293B]">{t.password}</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 border-gray-300 focus:border-[#2563EB] focus:ring-[#60A5FA]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-[#1E293B]">{t.confirmPassword}</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="pl-10 border-gray-300 focus:border-[#2563EB] focus:ring-[#60A5FA]"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-[#10B981] hover:bg-[#059669] text-white">
                      {t.registerButton}
                    </Button>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <Separator className="my-6" />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">
                        {t.continueWith}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <Button variant="outline" type="button" className="w-full border-gray-300 hover:border-[#2563EB]">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        {t.google}
                      </Button>
                      <Button variant="outline" type="button" className="w-full border-gray-300 hover:border-[#2563EB]">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        {t.apple}
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[#1E293B] mb-2">{t.featuresTitle}</h2>
              <p className="text-gray-600">{t.featuresSubtitle}</p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600">
            <p>{t.footerCopyright}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#2563EB] transition-colors">{t.privacy}</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">{t.terms}</a>
              <a href="#" className="hover:text-[#2563EB] transition-colors">{t.contact}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
