const messages = [
    {
        role: "user",
        content: "I want to create a full-stack web application for managing personal tasks and projects. What technologies would you recommend?"
    },
    {
        role: "bot",
        content: "For a modern task management application, I'd recommend using React with Next.js for the frontend, Node.js with Express for the backend, and MongoDB for the database. This stack offers great performance, easy deployment, and good developer experience. Would you like me to break down the implementation steps?"
    },
    {
        role: "user",
        content: "Yes, please break down the main components we'll need to build."
    },
    {
        role: "bot",
        content: "Let's structure the main components: 1) User Authentication system with JWT, 2) Task CRUD operations, 3) Project management with task grouping, 4) Dashboard with task statistics, 5) Real-time updates using WebSocket, and 6) Responsive UI with Material-UI or Tailwind. Which component should we start with?"
    },
    {
        role: "user",
        content: "Let's start with the authentication system. What's the best approach?"
    },
    {
        role: "bot",
        content: "For authentication, we'll use JWT (JSON Web Tokens) with bcrypt for password hashing. Here's the basic setup: 1) Create user model with email/password, 2) Implement register/login endpoints, 3) Add middleware for route protection, 4) Set up refresh tokens for security. Would you like to see the code structure?"
    },
    {
        role: "user",
        content: "Yes, could you show me the user model schema?"
    },
    {
        role: "bot",
        content: "Here's a MongoDB schema using Mongoose:\n\nconst userSchema = new mongoose.Schema({\n  email: { type: String, required: true, unique: true },\n  password: { type: String, required: true },\n  name: { type: String, required: true },\n  role: { type: String, default: 'user' },\n  createdAt: { type: Date, default: Date.now }\n});"
    },
    {
        role: "user",
        content: "Great, now how should we handle the password hashing?"
    },
    {
        role: "bot",
        content: "We'll use bcrypt for password hashing. Add this middleware to the user schema:\n\nuserSchema.pre('save', async function(next) {\n  if (!this.isModified('password')) return next();\n  this.password = await bcrypt.hash(this.password, 12);\n  next();\n});"
    },
    {
        role: "user",
        content: "What about the frontend components for authentication?"
    },
    {
        role: "bot",
        content: "For the frontend, we'll create these React components: 1) LoginForm and RegisterForm with form validation, 2) AuthContext for global auth state, 3) PrivateRoute wrapper for protected routes, 4) Navigation guard middleware. Would you like to see the implementation of any of these?"
    },
    {
        role: "user",
        content: "Can you show me the AuthContext implementation?"
    },
    {
        role: "bot",
        content: "Here's the basic AuthContext setup:\n\nconst AuthContext = createContext();\n\nexport const AuthProvider = ({ children }) => {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  const login = async (credentials) => {\n    const response = await api.post('/auth/login', credentials);\n    setUser(response.data.user);\n    localStorage.setItem('token', response.data.token);\n  };\n\n  // Add logout and token refresh logic\n};"
    },
    {
        role: "user",
        content: "How should we handle API requests with the auth token?"
    },
    {
        role: "bot",
        content: "We'll create an axios instance with interceptors:\n\nconst api = axios.create({\n  baseURL: process.env.REACT_APP_API_URL\n});\n\napi.interceptors.request.use(config => {\n  const token = localStorage.getItem('token');\n  if (token) config.headers.Authorization = `Bearer ${token}`;\n  return config;\n});"
    },
    {
        role: "user",
        content: "What about error handling for expired tokens?"
    },
    {
        role: "bot",
        content: "Add this response interceptor:\n\napi.interceptors.response.use(\n  response => response,\n  async error => {\n    if (error.response.status === 401 && error.response.data.message === 'Token expired') {\n      const refreshToken = localStorage.getItem('refreshToken');\n      const response = await api.post('/auth/refresh', { refreshToken });\n      localStorage.setItem('token', response.data.token);\n      return api(error.config);\n    }\n    return Promise.reject(error);\n  }\n);"
    },
    {
        role: "user",
        content: "Should we implement remember me functionality?"
    },
    {
        role: "bot",
        content: "Yes, we can add remember me by adjusting the token storage and expiration:\n\nconst login = async (credentials, remember) => {\n  const response = await api.post('/auth/login', credentials);\n  setUser(response.data.user);\n  if (remember) {\n    localStorage.setItem('token', response.data.token);\n  } else {\n    sessionStorage.setItem('token', response.data.token);\n  }\n};"
    },
    {
        role: "user",
        content: "Great! Now let's move on to the task management features. How should we structure the task model?"
    }
];