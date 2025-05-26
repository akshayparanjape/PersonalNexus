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
        title: "ARES: Automated ML Framework",
        description: "Streamlined machine learning lifecycle from data preparation to deployment, featuring OOD detection, SHAP analysis, and process optimization for manufacturing.",
        longDescription: "IconPro ARES is designed to streamline the machine learning lifecycle, from data preparation to model deployment, enabling efficient experimentation, model validation, and real-world application in predictive analytics and process optimization.",
        category: "AutoML Framework",
        technologies: ["AutoML", "Kubernetes", "SHAP", "Cloud"],
        imageUrl: "https://pixabay.com/get/gea8a666fd75fc1ae8337764994550ff5b5b0ce63080b34688a331424a82a92fa29c257189e697221af4e1ba39a5b360bdf78333e783b297a3eb9e5334c9f80b5_1280.jpg",
        featured: true,
      },
      {
        title: "KI-Erosion: Wire-EDM Monitoring",
        description: "Real-time quality monitoring for Wire Electrical Discharge Machining using ML algorithms to correlate geometric curvature errors and improve precision.",
        longDescription: "Improve precision in Wire Electrical Discharge Machining (EDM) through real-time quality monitoring using machine learning. Traditional Wire EDM processes lack real-time feedback, leading to inconsistencies in machining quality.",
        category: "Real-time Monitoring",
        technologies: ["Supervised Learning", "SHAP", "Manufacturing"],
        imageUrl: "https://pixabay.com/get/g815dc0bc7c0b3c5e945a9ee3ac3c4a9f05055497ee0103b4b7c6d46f98110f43b4a970ec7615fcd74847c665f5768a38_1280.jpg",
        featured: true,
      },
      {
        title: "RL Process Optimization",
        description: "Hybrid-MPO RL framework for real-time manufacturing parameter optimization, reducing scrap rates and improving efficiency compared to traditional algorithms.",
        longDescription: "Develop a reinforcement learning (RL) framework for real-time process parameter optimization to enhance quality, reduce scrap, and improve efficiency in manufacturing.",
        category: "Reinforcement Learning",
        technologies: ["Hybrid-MPO", "DQN", "Optimization"],
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: true,
      },
      {
        title: "AI Ultrasonic Testing",
        description: "AI-driven semantic segmentation for ultrasonic data interpretation in resistance spot welding monitoring, enabling automated quality control.",
        longDescription: "This work develops AI-driven semantic segmentation for ultrasonic data interpretation in RSW monitoring, enabling automated feedback control, improving NDE methodologies, and enhancing manufacturing efficiency.",
        category: "Computer Vision",
        technologies: ["U-Net", "Transformers", "Segmentation"],
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: false,
      },
      {
        title: "Kubernetes AutoML SaaS",
        description: "Scalable SaaS AutoML platform built with Kubernetes microservices, featuring distributed computing and multi-tenant architecture.",
        longDescription: "Build a scalable, resilient, and efficient Software-as-a-Service (SaaS) AutoML platform that enables users to automate the end-to-end machine learning pipeline using Kubernetes-based microservices.",
        category: "SaaS Platform",
        technologies: ["Kubernetes", "RabbitMQ", "Microservices"],
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
        featured: false,
      },
      {
        title: "Neural Process Capability",
        description: "Neural network-based fast prediction model for process capability index estimation, achieving 10x speed improvement with C++ .dll integration.",
        longDescription: "Create a neural network based fast prediction model for identifying process capability index for Statistical Process Control software. Ship a C++ .dll for client integration that led to enhance the speed 10x.",
        category: "Process Control",
        technologies: ["1D-CNNs", "C++", "Statistics"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
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
