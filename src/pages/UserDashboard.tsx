import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Eye,
  Heart,
  Search,
  Filter,
  Gavel,
} from "lucide-react";

// Sample auction items
const auctionItems = [
  {
    id: "ITM001",
    name: "Office Desk - Mahogany Wood",
    description: "Excellent condition mahogany office desk with drawers. Previously used in the Dean's office.",
    category: "Furniture",
    currentBid: 28000,
    minimumBid: 30000,
    timeLeft: "2 days",
    bids: 12,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    condition: "Excellent",
  },
  {
    id: "ITM002",
    name: "Dell OptiPlex 7090 Desktop",
    description: "High-performance desktop computer with Intel i7 processor. Suitable for office work or research.",
    category: "Electronics", 
    currentBid: 67000,
    minimumBid: 70000,
    timeLeft: "5 hours",
    bids: 8,
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400",
    condition: "Good",
  },
  {
    id: "ITM003",
    name: "Laboratory Equipment Set",
    description: "Complete chemistry lab equipment including beakers, burettes, and measuring instruments.",
    category: "Equipment",
    currentBid: 185000,
    minimumBid: 190000,
    timeLeft: "3 hours",
    bids: 15,
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=400",
    condition: "Good",
  },
  {
    id: "ITM004",
    name: "Conference Table (8-seater)",
    description: "Large conference table perfect for meetings. Made from solid wood with leather inlay.",
    category: "Furniture",
    currentBid: 35000,
    minimumBid: 38000,
    timeLeft: "1 day",
    bids: 6,
    image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400",
    condition: "Fair",
  },
  {
    id: "ITM005",
    name: "Projector - Epson EB-X41",
    description: "High-quality projector suitable for presentations and lectures. Includes all cables.",
    category: "Electronics",
    currentBid: 45000,
    minimumBid: 48000,
    timeLeft: "4 days",
    bids: 3,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400",
    condition: "Excellent",
  },
  {
    id: "ITM006",
    name: "Filing Cabinet - Metal",
    description: "4-drawer metal filing cabinet with locks. Perfect for document storage.",
    category: "Furniture",
    currentBid: 12000,
    minimumBid: 15000,
    timeLeft: "6 days",
    bids: 4,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    condition: "Good",
  },
];

const UserDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Browse Auctions</h1>
          <p className="text-muted-foreground">
            Discover and bid on LASU's obsolete items
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search auction items..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="equipment">Equipment</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Auction Items Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {auctionItems.map((item) => (
            <Card key={item.id} className="shadow-card hover:shadow-elegant transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-3 right-3">
                  <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-3 left-3">
                  <Badge variant="secondary" className="bg-white/90">
                    {item.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {item.name}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {item.condition}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Current Bid</p>
                      <p className="text-xl font-bold text-success">
                        ₦{item.currentBid.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Min. Next Bid</p>
                      <p className="text-lg font-semibold">
                        ₦{item.minimumBid.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Gavel className="h-4 w-4" />
                      {item.bids} bids
                    </div>
                    <div className="flex items-center gap-1 text-warning">
                      <Clock className="h-4 w-4" />
                      {item.timeLeft} left
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                      Place Bid
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;