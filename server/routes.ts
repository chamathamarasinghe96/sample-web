import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppointmentSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for booking appointments
  app.post('/api/appointments', async (req, res) => {
    try {
      // Validate request body against schema
      const appointmentData = insertAppointmentSchema.parse(req.body);
      
      // Create appointment in storage
      const appointment = await storage.createAppointment(appointmentData);
      
      res.status(201).json({
        message: "Appointment created successfully",
        appointment
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Error creating appointment:", error);
        res.status(500).json({ 
          message: "Failed to create appointment" 
        });
      }
    }
  });

  // Get all appointments (admin only in real app)
  app.get('/api/appointments', async (req, res) => {
    try {
      const appointments = await storage.getAllAppointments();
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ message: "Failed to fetch appointments" });
    }
  });

  // Get services
  app.get('/api/services', async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  // Get stylists
  app.get('/api/stylists', async (req, res) => {
    try {
      const stylists = await storage.getAllStylists();
      res.json(stylists);
    } catch (error) {
      console.error("Error fetching stylists:", error);
      res.status(500).json({ message: "Failed to fetch stylists" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
