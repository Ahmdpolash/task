export interface Course {
  title: string;
  creator: string;
  level: string;
  price: string;
  rating: string;
  students: string;
  duration: string;
  lessons: string;
  theme: string;
  tag: string;
}

export interface Category {
  name: string;
  icon?: string;
  color?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  body: string;
}

export interface PartnerLogo {
  id: string;
  src: string;
  alt: string;
}

export interface CourseModule {
  title: string;
  description: string;
  count: number;
}

export interface CourseReview {
  name: string;
  role: string;
  date: string;
  body: string;
  initials: string;
}
