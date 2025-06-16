// src/routes.tsx
import MainComponent from './pages/homePage.tsx/homePage.tsx'
import OnboardingPage from './pages/onboadingPage/OnboardingPage.tsx'
import ContactPage from './pages/contactPage/ContactPage.tsx'
import ClientPortal from './pages/client-portal/ClientPortal.tsx'
import SignIn from './pages/signInPage/signInPage.tsx'
import Privacy from './pages/policies/PrivacyPolicy.tsx'
import Terms from './pages/policies/TermsAndCondition.tsx'
import About from './pages/about/About.tsx'
import ServicePackages from './pages/ServicePackages/ServicePackages.tsx'
import RootLayout from './layouts/rootLayout/RootLayout.tsx'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <MainComponent />
            },
            {
                path: '/onboarding',
                element: <OnboardingPage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/client-portal',
                element: <ClientPortal />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/privacy',
                element: <Privacy />
            },
            {
                path: '/terms',
                element: <Terms />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/packages',
                element: <ServicePackages />
            }
        ]
    }
])

export default routes
