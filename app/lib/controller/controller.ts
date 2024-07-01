// src/controllers/userController.ts
import { Request, Response } from "express";
import db from "../database/index";
import { RowDataPacket } from "mysql2";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM users");
    const users: User[] = rows.map((row) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
    }));
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      const user: User = {
        id: rows[0].id,
        name: rows[0].name,
        email: rows[0].email,
        phone: rows[0].phone,
      };
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  try {
    await db.query("INSERT INTO users (name, email, phone) VALUES (?, ?, ?)", [
      name,
      email,
      phone,
    ]);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  try {
    await db.query(
      "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?",
      [name, email, phone, req.params.id]
    );
    res.json({ message: "User updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    res.json({ message: "User deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
};
