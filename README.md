# WanderLust ✈️ (Airbnb-style Travel Listing App)

A full-stack web app where users can explore stays, create listings with images, and post reviews.  
Built with **Node.js + Express + MongoDB + EJS**, plus **Cloudinary** for image uploads and **Mapbox** for geocoding/maps.

## Live Demo
- Deployed App: https://wanderlust-14je.onrender.com/listings

## Features
- ✅ Auth: Signup / Login / Logout (Passport Local)
- ✅ Listings CRUD: Create, view, edit, delete listings
- ✅ Image upload with Cloudinary (multer-storage-cloudinary)
- ✅ Reviews: Add & delete reviews
- ✅ Authorization:
  - Only listing owner can edit/delete a listing
  - Only review author can delete a review
- ✅ Mapbox Geocoding: converts location to coordinates and shows on map
- ✅ Flash messages + Sessions (stored in Mongo via connect-mongo)

## Tech Stack
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Frontend:** EJS, Bootstrap, CSS  
**Auth:** Passport.js, passport-local-mongoose  
**Uploads:** Multer + Cloudinary  
**Maps:** Mapbox SDK (geocoding) + Mapbox GL (frontend map)

## Prerequisites
- Node.js (recommended: **v22.16.0**)
- MongoDB (local) OR MongoDB Atlas
- Cloudinary account
- Mapbox account
