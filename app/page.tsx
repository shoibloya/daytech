"use client"

import { motion } from "framer-motion"
import { KpiCard } from "@/components/kpi-card"
import { KeywordsTable } from "@/components/keywords-table"
import { BacklinksTable } from "@/components/backlinks-table"
import { Activity, Link2, Search, Share2, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import AgentsList from "@/components/AgentsList"
import TaskCalendar from "@/components/TaskCalendar"
import { BlogSection } from "@/components/blog-section"

export default function Dashboard() {
  // Example KPI data
  const kpiData = [
    { title: "DR", value: 1.9, icon: <Activity className="h-4 w-4" /> },
    { title: "UR", value: 2.3, icon: <Users className="h-4 w-4" /> },
    { title: "Backlinks", value: 17, icon: <Link2 className="h-4 w-4" /> },
    { title: "Ref. Domains", value: 11, icon: <Share2 className="h-4 w-4" /> },
    { title: "Organic Traffic", value: 8, icon: <Search className="h-4 w-4" /> },
  ]

  // Hard-coded keywords data
  const keywordsData = []

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <div className="container mx-auto flex flex-col space-y-8 px-4 py-8 md:px-6 lg:px-8">
        {/* Dashboard Title */}
        <div className="flex flex-col gap-2 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto mb-2 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-primary/50"
          />
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
          >
            Daytech Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Track your website&apos;s performance and SEO metrics
          </motion.p>
        </div>

        {/* KPI Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-5"
        >
          {kpiData.map((kpi, index) => (
            <motion.div key={kpi.title} variants={itemVariants}>
              <KpiCard title={kpi.title} value={kpi.value} icon={kpi.icon} index={index} />
            </motion.div>
          ))}
        </motion.div>

       

        {/* Blog Section - Added above SEO Metrics */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <BlogSection />
          </motion.div>
        </motion.div>

        {/* Content Below */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-6">
          {/* Keywords and Backlinks Tabs */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="keywords">
              <Card className="border bg-card/50 shadow-md backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-bold tracking-tight">SEO Metrics</h2>
                    </div>
                    <TabsList className="bg-background/80 backdrop-blur-sm">
                      <TabsTrigger value="keywords">Keywords</TabsTrigger>
                      <TabsTrigger value="backlinks">Backlinks</TabsTrigger>
                    </TabsList>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <TabsContent value="keywords" className="mt-0">
                      <KeywordsTable/>
                    
                  </TabsContent>
                  <TabsContent value="backlinks" className="mt-0">
                    <BacklinksTable />
                  </TabsContent>
                </CardContent>
              </Card>
            </Tabs>
          </motion.div>
        </motion.div>

        {/* Removed the old Blogs Section as it's been replaced with the new BlogSection component */}
      </div>
    </div>
  )
}

