"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import { LoadingScreen } from "@/components/ui/loading";
import Sidebar from "@/components/layouts/sidebar";

import {
  Brain,
  Trophy,
  Star,
  BookOpen,
  Languages,
  Award,
  Target,
  Flame,
  BrainCircuit,
  Timer,
  TrendingUp,
  Bell,
  Settings,
} from "lucide-react";
import React from "react";

const DashboardPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      setIsRedirecting(true);
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading || isRedirecting) {
    return <LoadingScreen />;
  }

  if (!user) {
    return null;
  }

  const stats = [
    {
      name: "Learning Streak",
      value: "7 days",
      icon: Flame,
      trend: "+1",
      color: "from-orange-500 to-red-500",
      description: "Current streak",
      progress: 100,
      bgColor: "bg-orange-500/10",
    },
    {
      name: "Words Mastered",
      value: "1,234",
      icon: BrainCircuit,
      trend: "+45",
      color: "from-purple-500 to-pink-500",
      description: "Total vocabulary",
      progress: 60,
      bgColor: "bg-purple-500/10",
    },
    {
      name: "Study Time",
      value: "24h 30m",
      icon: Timer,
      trend: "+2h",
      color: "from-blue-500 to-cyan-500",
      description: "This week",
      progress: 75,
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Achievement Score",
      value: "8,450",
      icon: Trophy,
      trend: "+120",
      color: "from-yellow-500 to-amber-500",
      description: "Total points",
      progress: 85,
      bgColor: "bg-yellow-500/10",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "Vocabulary Practice",
      description: "Learned 20 new words in Spanish",
      language: "Spanish",
      time: "2 hours ago",
      progress: 75,
      icon: BookOpen,
      category: "Vocabulary",
      duration: "15 min",
      status: "completed",
      points: 100,
    },
    {
      id: 2,
      type: "Quiz",
      title: "Numbers 1-100",
      language: "French",
      time: "5 hours ago",
      progress: 92,
      icon: Languages,
      category: "Vocabulary",
      duration: "10 min",
      status: "completed",
      points: 150,
    },
    {
      id: 3,
      type: "Practice",
      title: "Daily Conversation",
      language: "German",
      time: "1 day ago",
      progress: 78,
      icon: Star,
      category: "Speaking",
      duration: "20 min",
      status: "in_progress",
      points: 200,
    },
    {
      id: 4,
      type: "Vocabulary",
      title: "Food & Drinks",
      language: "Italian",
      time: "2 days ago",
      progress: 95,
      icon: Award,
      category: "Vocabulary",
      duration: "12 min",
      status: "completed",
      points: 180,
    },
  ];

  const learningGoals = [
    {
      id: 1,
      title: "Complete Basic Spanish",
      progress: 75,
      target: 100,
      icon: Target,
      description: "Master basic grammar and vocabulary",
      deadline: "2 weeks left",
      status: "on_track",
      reward: "Gold Badge",
    },
    {
      id: 2,
      title: "Master French Pronunciation",
      progress: 45,
      target: 100,
      icon: Star,
      description: "Improve speaking skills",
      deadline: "1 month left",
      status: "needs_attention",
      reward: "Silver Badge",
    },
    {
      id: 3,
      title: "Learn 1000 German Words",
      progress: 60,
      target: 100,
      icon: Brain,
      description: "Build vocabulary foundation",
      deadline: "3 weeks left",
      status: "on_track",
      reward: "Bronze Badge",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0A0A0A]">
      <Sidebar />
      <div className="flex-1 ml-[280px]">
        <div className="fixed top-0 right-0 left-[280px] z-40 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center space-x-4"></div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Bell className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
                <Settings className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, {user?.email?.split("@")[0]}!
              </h1>
              <p className="text-gray-400">
                Continue your language learning journey
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-400">
                        {stat.trend}
                      </span>
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400">{stat.name}</p>
                  <div className="mt-4">
                    <div className="h-1 bg-gray-800 rounded-full">
                      <div
                        className={`h-full rounded-full ${stat.color}`}
                        style={{ width: `${stat.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activities */}
              <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
                <h2 className="text-xl font-bold text-white mb-6">
                  Recent Activities
                </h2>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-lg ${activity.status === "completed" ? "bg-green-500/10" : "bg-yellow-500/10"}`}
                      >
                        <activity.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {activity.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">
                          {activity.duration}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            activity.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : activity.status === "in-progress"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {activity.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Goals */}
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800">
                <h2 className="text-xl font-bold text-white mb-6">
                  Learning Goals
                </h2>
                <div className="space-y-4">
                  {learningGoals.map((goal) => (
                    <div
                      key={goal.id}
                      className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <goal.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <h3 className="text-white font-medium">{goal.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">
                        {goal.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-400">
                            Deadline:
                          </span>
                          <span className="text-sm text-white">
                            {goal.deadline}
                          </span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            goal.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : goal.status === "in-progress"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {goal.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
