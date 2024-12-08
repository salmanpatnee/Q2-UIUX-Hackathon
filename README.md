# E-commerce Figma to Next.js Static Template

## Project Overview
This project involves converting a Figma-based e-commerce design into a static Next.js template. Below is a brief description of my approach to building this static template.

## Approach

1. **Design Analysis**  
   I began by thoroughly analyzing the Figma design to understand the layout and structure of the website. I identified reusable components and elements that appear across different pages, such as headers, footers, buttons, and product cards.

2. **Tailwind CSS Customization**  
   After identifying the design elements, I extracted the primary, secondary, accent, and text colors, as well as the fonts used in the design. I customized the Tailwind CSS configuration to include these colors and fonts, ensuring consistency throughout the template.

3. **Component Creation**  
   The next step was to build the header and footer as separate components, allowing them to be reused across multiple pages. This ensures that any changes to the layout can be made in one place, maintaining uniformity across the static pages.

4. **Reusable Utility Classes**  
   To improve development efficiency, I created a set of reusable Tailwind utility classes. These include:
   - `wrapper`: Acts as a container for centering content (similar to Bootstrap’s container).
   - `title`: A consistent style for headings throughout the template.

5. **Reusable Components**  
   I developed a variety of reusable components to save time and keep the code DRY (Don't Repeat Yourself). These components include:
   - BlogPost
   - CategoryCard
   - ProductCard
   - FeatureSection
   - HeroSection
   - Input Fields
   - Mini Cart
   - Pagination

6. **Static Page Development**  
   I created the following pages based on the Figma design as static templates:
   - [Home](https://q2-uiux-hackathon.vercel.app/)
   - [Shop](https://q2-uiux-hackathon.vercel.app/shop)
   - [Product Detail](https://q2-uiux-hackathon.vercel.app/products/respira)
   - [Cart](https://q2-uiux-hackathon.vercel.app/cart)
   - [Checkout](https://q2-uiux-hackathon.vercel.app/checkout)
   - [Contact](https://q2-uiux-hackathon.vercel.app/contact)
   - [Blog](https://q2-uiux-hackathon.vercel.app/blog)

## Conclusion
By carefully analyzing the design and breaking it down into reusable components, I was able to efficiently convert the Figma design into a static Next.js template. This template can be easily extended or integrated into a fully dynamic application in the future.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
