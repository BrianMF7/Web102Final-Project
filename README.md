# ⚽ GOAT Soccer Debates

A React web application where users can share their opinions about who is the greatest soccer player of all time. Built with React, Supabase, and modern CSS.

## 🌟 Features

### Core Features
- ✅ **Create Posts**: Share your GOAT pick with player name, title, explanation, and image
- ✅ **Home Feed**: Browse all posts with search and sorting capabilities
- ✅ **Post Details**: View detailed posts with like functionality
- ✅ **Edit Posts**: Update your arguments and player picks
- ✅ **Image Support**: Add player images via URL links
- ✅ **Like System**: Show appreciation for great GOAT arguments

### User Experience
- ✅ **Search**: Find posts by player name or title
- ✅ **Sorting**: Sort by recent posts or player name
- ✅ **Responsive Design**: Mobile-friendly interface
- ✅ **Loading States**: Smooth loading animations
- ✅ **Glass Morphism**: Modern translucent design

## 🚀 Quick Start

1. **Clone the repository**
2. **Database Setup**: Configure your Supabase database with the Posts table
3. **Environment**: Add your Supabase credentials to `.env`
4. **Install**: `npm install`
5. **Run**: `npm run dev`

## � Database Schema

Your Supabase database should have a `Posts` table with these columns:
- `id` (UUID, Primary Key)
- `created_at` (Timestamp)
- `name` (Text) - Soccer player name
- `title` (Text) - Post title
- `content` (Text) - GOAT explanation
- `image` (Text) - Image URL
- `submit` (Boolean) - Publication status
- `likes` (Boolean) - Like status

## 📋 How It Works

1. **Share Your Pick**: Create a post with your favorite soccer player
2. **Explain Your Choice**: Write why you think they're the GOAT
3. **Add Visuals**: Include an image URL of the player
4. **Engage**: Like other posts and browse different opinions
5. **Edit Anytime**: Update your arguments as your opinion evolves

## 🛠 Technology Stack

- **Frontend**: React 19.1.0 with React Router 7.7.1
- **Database**: Supabase (PostgreSQL)
- **Styling**: Modern CSS with glass morphism design
- **Build Tool**: Vite 7.0.4
- **Icons**: Emojis for intuitive UI

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.jsx      # Main layout wrapper
│   └── Navigation.jsx  # Top navigation bar
├── pages/              # Page components
│   ├── HomePage.jsx    # Main feed with posts
│   ├── CreatePost.jsx  # Post creation form
│   ├── PostDetails.jsx # Individual post view
│   └── EditPost.jsx    # Post editing form
├── config/
│   └── supabaseClient.js # Supabase configuration
└── App.jsx             # Main app component with routing
```

## 🎨 Design Features

- **Glass Morphism**: Modern translucent design elements
- **Gradient Backgrounds**: Beautiful soccer-themed color transitions
- **Smooth Animations**: Hover effects and loading states
- **Responsive Layout**: Mobile-first design approach
- **Soccer Theme**: Football-inspired UI elements and emojis

## � Recent Updates

- ✅ Updated to match user's Supabase Posts table schema
- ✅ Simplified form fields: name, title, content, image
- ✅ Removed complex authentication system
- ✅ Streamlined like functionality
- ✅ Clean, focused soccer GOAT debate experience

## 🚀 Future Enhancements

- Add user profiles and authentication
- Implement comment system
- Add player statistics integration
- Create tournament-style GOAT brackets
- Add video content support
- Implement real-time updates

## 📄 License

MIT License - Perfect for learning React and Supabase!
