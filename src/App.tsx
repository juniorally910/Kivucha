import { Routes, Route } from 'react-router'
import { Footer } from './components/Footer'
import {Navbar} from './components/Navbar'
import { HomePage } from './components/pages/HomePage'
import { AboutPage } from './components/pages/AboutPage'
import { ExpertisePage } from './components/pages/ExpertisePage'
import { ExpertiseDetailPage } from './components/pages/ExpertiseDetailPage'
import { IndustriesPage } from './components/pages/IndustriesPage'
import { IndustryDetailPage } from './components/pages/IndustryDetailPage'
import { InsightsPage } from './components/pages/InsightPage'
import { InsightDetailPage } from './components/pages/InsightDetailPage'
import { OurPeoplePage } from './components/pages/OurPeoplePage'
import { CareersPage } from './components/pages/CareersPage'
import { ScrollToTop } from './components/ScrollToTop'


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/expertise' element={<ExpertisePage />} />
        <Route path='/expertise/:id' element={<ExpertiseDetailPage />} />
        <Route path='/industries' element={<IndustriesPage />} />
        <Route path='/industries/:id' element={<IndustryDetailPage />} />
        <Route path='/insights' element={<InsightsPage />} />
        <Route path='/insights/:id' element={<InsightDetailPage />} />
        <Route path='/people' element={<OurPeoplePage />} />
        <Route path='/people' element={<OurPeoplePage />} />
        <Route path='/careers' element={<CareersPage />} />


        
        
        
        
      </Routes>
      <Footer />
    </>
  )
}

export default App

