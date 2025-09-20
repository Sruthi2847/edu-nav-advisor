import { useState, useEffect } from "react";
import { User, Mail, Phone, MapPin, GraduationCap, Target, Heart, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { mockUserProfile } from "@/data/mockData";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(mockUserProfile);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        window.location.href = "/auth";
      } else {
        setUser(user);
        // Load user profile from database if available
        loadProfile(user.id);
      }
    });
  }, []);

  const loadProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (data) {
        setProfile({
          ...mockUserProfile,
          name: data.full_name || mockUserProfile.name,
          email: data.email || mockUserProfile.email,
          phone: data.phone || mockUserProfile.phone,
          location: data.location || mockUserProfile.location,
          class: data.class_grade || mockUserProfile.class,
          interests: data.interests || mockUserProfile.interests,
          academicGoals: data.career_goals || mockUserProfile.academicGoals,
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user.id,
          full_name: profile.name,
          email: profile.email,
          phone: profile.phone,
          location: profile.location,
          class_grade: profile.class,
          interests: profile.interests,
          career_goals: profile.academicGoals,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
      setEditing(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const updateProfile = (field: string, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {profile.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{profile.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        {profile.class} - {profile.stream} Stream
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={editing ? "outline" : "default"}
                      onClick={() => editing ? setEditing(false) : setEditing(true)}
                    >
                      {editing ? "Cancel" : "Edit Profile"}
                    </Button>
                    {editing && (
                      <Button variant="hero" onClick={handleSaveProfile} disabled={loading}>
                        {loading ? "Saving..." : "Save"}
                      </Button>
                    )}
                    <Button variant="outline" onClick={handleLogout}>
                      Logout
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Personal Details</TabsTrigger>
                <TabsTrigger value="academic">Academic Info</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="name"
                            value={profile.name}
                            onChange={(e) => updateProfile("name", e.target.value)}
                            disabled={!editing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => updateProfile("email", e.target.value)}
                            disabled={!editing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            value={profile.phone}
                            onChange={(e) => updateProfile("phone", e.target.value)}
                            disabled={!editing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="location"
                            value={profile.location}
                            onChange={(e) => updateProfile("location", e.target.value)}
                            disabled={!editing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="academic" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Academic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Current Class</Label>
                        <p className="text-lg font-medium">{profile.class}</p>
                      </div>
                      <div>
                        <Label>Stream</Label>
                        <p className="text-lg font-medium">{profile.stream}</p>
                      </div>
                    </div>

                    <div>
                      <Label className="flex items-center gap-2 mb-3">
                        <Heart className="h-4 w-4" />
                        Interests
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {profile.interests.map((interest, index) => (
                          <Badge key={index} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="flex items-center gap-2 mb-3">
                        <Target className="h-4 w-4" />
                        Academic Goals
                      </Label>
                      <div className="space-y-2">
                        {profile.academicGoals.map((goal, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span>{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5" />
                      Achievements & Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Completed Assessments</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3 bg-muted rounded">
                            <span>Aptitude Assessment</span>
                            <Badge variant="secondary">Completed</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-muted rounded">
                            <span>Interest Survey</span>
                            <Badge variant="outline">Pending</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Account Activity</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>Joined: {new Date(profile.joinedDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4" />
                            <span>Profile Completion: 85%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;