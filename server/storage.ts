import { users, blogPosts, projects, contactMessages, type User, type InsertUser, type BlogPost, type InsertBlogPost, type Project, type InsertProject, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private projects: Map<number, Project>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentBlogPostId: number;
  private currentProjectId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.projects = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentBlogPostId = 1;
    this.currentProjectId = 1;
    this.currentContactMessageId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed blog posts
    const sampleBlogPosts: InsertBlogPost[] = [
      {
        title: "The Future of AI in Manufacturing",
        content: "Exploring how reinforcement learning and predictive analytics are transforming traditional manufacturing processes. The convergence of artificial intelligence and manufacturing is creating unprecedented opportunities for optimization, quality control, and predictive maintenance...",
        excerpt: "Exploring how reinforcement learning and predictive analytics are transforming traditional manufacturing processes...",
        category: "AI Research",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        published: true,
      },
      {
        title: "From Research to Industry Impact",
        content: "My journey from academic research to leading AI projects and the lessons learned about bridging the gap between theory and practice. The transition from academic research to industry application presents unique challenges and opportunities...",
        excerpt: "My journey from academic research to leading AI projects and the lessons learned about bridging the gap...",
        category: "Entrepreneurship",
        imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        published: true,
      },
      {
        title: "Scaling AI with Kubernetes",
        content: "Best practices for deploying machine learning models at scale using cloud-native technologies. Kubernetes has emerged as the de facto standard for container orchestration, and its application in ML workflows...",
        excerpt: "Best practices for deploying machine learning models at scale using cloud-native technologies...",
        category: "MLOps",
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        published: true,
      },
    ];

    sampleBlogPosts.forEach(post => {
      this.createBlogPost(post);
    });

    // Seed projects
    const sampleProjects: InsertProject[] = [
      {
        title: "KI-Erosion: Wire-EDM Real-time Monitoring",
        description: "Real-time monitoring for wire-EDM process using Machine Learning to improve precision through real-time quality monitoring and correlate geometric curvature errors.",
        longDescription: "Improve precision in Wire Electrical Discharge Machining (EDM) through real-time quality monitoring using machine learning. Use sensor data to capture machining parameters, preprocessing current voltage into features, and apply ensemble regression models to correlate geometric curvature error for quality assessment.",
        category: "Real-time Monitoring",
        technologies: ["Supervised Learning", "SHAP", "Ensemble Regression", "Process Knowledge"],
        imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: true,
      },
      {
        title: "ARES: Automated ML Framework",
        description: "Streamlined machine learning lifecycle from data preparation to deployment, featuring OOD detection, SHAP analysis, and process optimization for manufacturing.",
        longDescription: "IconPro ARES is designed to streamline the machine learning lifecycle, from data preparation to model deployment, enabling efficient experimentation, model validation, and real-world application in predictive analytics and process optimization with Out-of-Distribution detection.",
        category: "AutoML Framework",
        technologies: ["AutoML", "OOD Detection", "SHAP", "Process Optimization"],
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: true,
      },
      {
        title: "RL for Manufacturing Process Optimization",
        description: "Reinforcement learning framework for optimizing manufacturing process parameters to reduce scrap using Hybrid-MPO RL for real-time parameter optimization.",
        longDescription: "Develop a reinforcement learning (RL) framework for real-time process parameter optimization to enhance quality, reduce scrap, and improve efficiency in manufacturing. Uses Hybrid-MPO RL to optimize numerical and categorical process parameters with PQ-model as surrogate.",
        category: "Reinforcement Learning",
        technologies: ["Hybrid-MPO", "DQN", "DDPG", "Process Optimization"],
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: true,
      },
      {
        title: "AI Ultrasonic Testing for Resistance Spot Welding",
        description: "Non-destructive testing for Resistance Spot Welding using AI-driven semantic segmentation for ultrasonic data interpretation enabling automated feedback control.",
        longDescription: "Develops AI-driven semantic segmentation techniques to interpret ultrasonic data for post-process and in-process monitoring of resistance spot welding (RSW). Uses segmentation mask data to estimate weld measurements leveraging prior welding process knowledge.",
        category: "Computer Vision",
        technologies: ["U-Net", "Vision Transformers", "Active Learning", "Semantic Segmentation"],
        imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: false,
      },
      {
        title: "Automated Pre-processing for Tabular ML",
        description: "Automated approach to preprocess tabular datasets including feature creation, selection, target discretization, and novel Bin-Based sampling method.",
        longDescription: "Automated preprocessing pipeline that integrates feature selection, feature engineering, target discretization, and a novel Bin-Based sampling method to improve ML model performance on tabular datasets. Validated using RandomForest and AutoML libraries.",
        category: "Data Processing",
        technologies: ["RandomForest", "AutoGluon", "AutoSklearn", "H2O", "KL-divergence"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: false,
      },
      {
        title: "Kubernetes AutoML SaaS Platform",
        description: "Scalable SaaS AutoML platform built with Kubernetes microservices, featuring distributed computing, multi-tenant architecture, and smart routing.",
        longDescription: "Build a scalable, resilient, and efficient Software-as-a-Service (SaaS) AutoML platform that enables users to automate the end-to-end machine learning pipeline using Kubernetes-based microservices with RabbitMQ communication and Redis for in-memory storage.",
        category: "SaaS Platform",
        technologies: ["Kubernetes", "RabbitMQ", "Redis", "Spark", "OpenAPI", "Gloo Edge"],
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: false,
      },
      {
        title: "Neural Networks for Process Capability",
        description: "Neural network-based fast prediction model for process capability index estimation, achieving 10x speed improvement with C++ .dll integration for Q-DAS.",
        longDescription: "Create a neural network based fast prediction model for identifying process capability index for Statistical Process Control software. Ship a C++ .dll for client to integrate in their software that led to enhance the speed 10x using autoencoder-based feature reduction.",
        category: "Process Control",
        technologies: ["1D-CNNs", "Autoencoder", "C++", "TensorFlow", "PyTorch"],
        imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: false,
      },
    ];

    sampleProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: number, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) return undefined;

    const updatedPost: BlogPost = {
      ...existingPost,
      ...updateData,
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
    };
    this.projects.set(id, project);
    return project;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  }
}

export const storage = new MemStorage();
