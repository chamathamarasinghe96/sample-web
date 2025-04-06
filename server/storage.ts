import { 
  User, 
  InsertUser, 
  Appointment, 
  InsertAppointment, 
  Service, 
  InsertService, 
  Stylist, 
  InsertStylist 
} from "@shared/schema";

// Storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Appointment methods
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointment(id: number): Promise<Appointment | undefined>;
  getAllAppointments(): Promise<Appointment[]>;
  
  // Service methods
  getAllServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // Stylist methods
  getAllStylists(): Promise<Stylist[]>;
  getStylist(id: number): Promise<Stylist | undefined>;
  createStylist(stylist: InsertStylist): Promise<Stylist>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private appointments: Map<number, Appointment>;
  private services: Map<number, Service>;
  private stylists: Map<number, Stylist>;
  
  private userIdCounter: number;
  private appointmentIdCounter: number;
  private serviceIdCounter: number;
  private stylistIdCounter: number;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.services = new Map();
    this.stylists = new Map();
    
    this.userIdCounter = 1;
    this.appointmentIdCounter = 1;
    this.serviceIdCounter = 1;
    this.stylistIdCounter = 1;
    
    // Initialize with sample data
    this.initializeServices();
    this.initializeStylists();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Appointment methods
  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.appointmentIdCounter++;
    const appointment: Appointment = { 
      ...insertAppointment, 
      id, 
      createdAt: new Date() 
    };
    this.appointments.set(id, appointment);
    return appointment;
  }
  
  async getAppointment(id: number): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }
  
  async getAllAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }
  
  // Service methods
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }
  
  async createService(insertService: InsertService): Promise<Service> {
    const id = this.serviceIdCounter++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }
  
  // Stylist methods
  async getAllStylists(): Promise<Stylist[]> {
    return Array.from(this.stylists.values());
  }
  
  async getStylist(id: number): Promise<Stylist | undefined> {
    return this.stylists.get(id);
  }
  
  async createStylist(insertStylist: InsertStylist): Promise<Stylist> {
    const id = this.stylistIdCounter++;
    const stylist: Stylist = { ...insertStylist, id };
    this.stylists.set(id, stylist);
    return stylist;
  }
  
  // Initialize with sample data
  private initializeServices() {
    const services: InsertService[] = [
      {
        name: "Women's Haircut",
        description: "Includes consultation, shampoo and style",
        price: "$55",
        category: "Hair",
        duration: 60
      },
      {
        name: "Men's Haircut",
        description: "Includes consultation and styling",
        price: "$35",
        category: "Hair",
        duration: 45
      },
      {
        name: "Balayage",
        description: "Hand-painted highlights for a natural look",
        price: "$175",
        category: "Color",
        duration: 180
      },
      {
        name: "Signature Facial",
        description: "Customized facial treatment for your skin type",
        price: "$85",
        category: "Skin",
        duration: 60
      },
      {
        name: "Bridal Package",
        description: "Complete hair and makeup for your special day",
        price: "$250",
        category: "Bridal",
        duration: 240
      },
      {
        name: "Manicure & Pedicure",
        description: "Complete hand and foot treatment",
        price: "$65",
        category: "Nails",
        duration: 90
      }
    ];
    
    services.forEach(service => {
      this.createService(service);
    });
  }
  
  private initializeStylists() {
    const stylists: InsertStylist[] = [
      {
        name: "Sophia Martinez",
        title: "Master Stylist & Color Specialist",
        bio: "With over 10 years of experience, Sophia brings creativity and precision to every client.",
        specialties: ["Balayage", "Curly Hair", "Updo"],
        isActive: true
      },
      {
        name: "Marcus Johnson",
        title: "Creative Director & Texture Expert",
        bio: "Marcus specializes in avant-garde styles and creating unique looks for each client.",
        specialties: ["Vivid Color", "Men's Cuts", "Texture"],
        isActive: true
      },
      {
        name: "Aisha Patel",
        title: "Esthetician & Makeup Artist",
        bio: "Aisha creates stunning looks that enhance natural beauty for any occasion.",
        specialties: ["Facials", "Bridal", "Skincare"],
        isActive: true
      }
    ];
    
    stylists.forEach(stylist => {
      this.createStylist(stylist);
    });
  }
}

export const storage = new MemStorage();
