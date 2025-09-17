import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Package,
  Gavel,
  Users,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";

// Sample data
const stats = [
  {
    title: "Total Items",
    value: 156,
    icon: Package,
    trend: { value: 12, isPositive: true },
  },
  {
    title: "Active Auctions",
    value: 23,
    icon: Gavel,
    trend: { value: 8, isPositive: true },
  },
  {
    title: "Registered Users",
    value: 342,
    icon: Users,
    trend: { value: 15, isPositive: true },
  },
  {
    title: "Total Revenue",
    value: "₦2.4M",
    icon: DollarSign,
    trend: { value: 18, isPositive: true },
  },
];

const recentItems = [
  {
    id: "ITM001",
    name: "Office Desk - Mahogany Wood",
    category: "Furniture",
    startingBid: 15000,
    currentBid: 28000,
    status: "Active",
    bids: 12,
  },
  {
    id: "ITM002", 
    name: "Dell OptiPlex 7090 Desktop",
    category: "Electronics",
    startingBid: 45000,
    currentBid: 67000,
    status: "Active",
    bids: 8,
  },
  {
    id: "ITM003",
    name: "Laboratory Equipment Set",
    category: "Equipment",
    startingBid: 120000,
    currentBid: 185000,
    status: "Ending Soon",
    bids: 15,
  },
  {
    id: "ITM004",
    name: "Conference Table (8-seater)",
    category: "Furniture",
    startingBid: 25000,
    currentBid: 35000,
    status: "Active",
    bids: 6,
  },
];

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage auctions and monitor system performance
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            <Plus className="h-4 w-4 mr-2" />
            Add New Item
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Items Table */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-foreground">Recent Auction Items</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Starting Bid</TableHead>
                  <TableHead>Current Bid</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Bids</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-mono text-sm">{item.id}</TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.category}</Badge>
                    </TableCell>
                    <TableCell>₦{item.startingBid.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold text-success">
                      ₦{item.currentBid.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={item.status === "Active" ? "default" : "destructive"}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.bids}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;