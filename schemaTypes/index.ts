import siteSettings from './documents/siteSettings'
import successStoriesPage from './documents/successStoriesPage'
import caseStudyCard from './objects/caseStudyCard'
import ctaButton from './objects/ctaButton'
import features from './objects/features'
import {footerLink, footerColumn} from './objects/footerColumn'
import navLink from './objects/navLink'
import seo from './objects/seo'
import socialLink from './objects/socialLink'
import statItem from './objects/statItem'

export const schemaTypes = [
  // documents
  successStoriesPage,
  siteSettings,

  // objects
  seo,
  ctaButton,
  features,
  statItem,
  caseStudyCard,
  navLink,
  footerLink,
  footerColumn,
  socialLink,
]
