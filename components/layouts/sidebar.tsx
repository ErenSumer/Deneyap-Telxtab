"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import {
  BookOpen,
  Brain,
  Trophy,
  Clock,
  Target,
  BarChart3,
  Settings,
  LogOut,
  Home,
  Users,
  MessageSquare,
  Bell,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
    { name: "Vocabulary", href: "/dashboard/vocabulary", icon: Brain },
    { name: "Progress", href: "/dashboard/progress", icon: BarChart3 },
    { name: "Achievements", href: "/dashboard/achievements", icon: Trophy },
    { name: "Study Time", href: "/dashboard/study-time", icon: Clock },
    { name: "Goals", href: "/dashboard/goals", icon: Target },
    { name: "Community", href: "/dashboard/community", icon: Users },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="w-[280px] h-screen bg-gray-900/50 backdrop-blur-lg border-r border-gray-800 fixed left-0 top-0 z-50">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold">L</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              LinguaLeap
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <div className="space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="ml-3">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User Profile and Logout */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-medium">
                {user?.email?.[0].toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.email}
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="mt-4 w-full flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="ml-3">Sign out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
