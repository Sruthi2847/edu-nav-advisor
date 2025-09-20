export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          category: string
          created_at: string
          criteria: Json | null
          description: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          points: number | null
        }
        Insert: {
          category: string
          created_at?: string
          criteria?: Json | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          points?: number | null
        }
        Update: {
          category?: string
          created_at?: string
          criteria?: Json | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          points?: number | null
        }
        Relationships: []
      }
      applications: {
        Row: {
          applied_date: string | null
          created_at: string
          deadline_date: string | null
          external_url: string | null
          id: string
          notes: string | null
          status: string | null
          title: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          applied_date?: string | null
          created_at?: string
          deadline_date?: string | null
          external_url?: string | null
          id?: string
          notes?: string | null
          status?: string | null
          title: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          applied_date?: string | null
          created_at?: string
          deadline_date?: string | null
          external_url?: string | null
          id?: string
          notes?: string | null
          status?: string | null
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      aptitude_quiz: {
        Row: {
          category: string
          created_at: string
          id: string
          options: Json
          question: string
          question_type: string | null
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          options: Json
          question: string
          question_type?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          options?: Json
          question?: string
          question_type?: string | null
        }
        Relationships: []
      }
      colleges: {
        Row: {
          annual_fees: number | null
          contact_info: Json | null
          courses: Json
          created_at: string
          cutoff_percentage: number | null
          facilities: Json | null
          id: string
          location: string
          name: string
          rating: number | null
          state: string
          type: string | null
          updated_at: string
        }
        Insert: {
          annual_fees?: number | null
          contact_info?: Json | null
          courses: Json
          created_at?: string
          cutoff_percentage?: number | null
          facilities?: Json | null
          id?: string
          location: string
          name: string
          rating?: number | null
          state: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          annual_fees?: number | null
          contact_info?: Json | null
          courses?: Json
          created_at?: string
          cutoff_percentage?: number | null
          facilities?: Json | null
          id?: string
          location?: string
          name?: string
          rating?: number | null
          state?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      mentor_sessions: {
        Row: {
          created_at: string
          duration: number | null
          feedback: string | null
          id: string
          mentor_id: string | null
          notes: string | null
          rating: number | null
          requested_date: string | null
          requested_time: string | null
          status: string | null
          topic: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration?: number | null
          feedback?: string | null
          id?: string
          mentor_id?: string | null
          notes?: string | null
          rating?: number | null
          requested_date?: string | null
          requested_time?: string | null
          status?: string | null
          topic: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration?: number | null
          feedback?: string | null
          id?: string
          mentor_id?: string | null
          notes?: string | null
          rating?: number | null
          requested_date?: string | null
          requested_time?: string | null
          status?: string | null
          topic?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentor_sessions_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentors"
            referencedColumns: ["id"]
          },
        ]
      }
      mentors: {
        Row: {
          availability: Json | null
          bio: string | null
          company: string | null
          created_at: string
          email_id: string | null
          experience_years: number | null
          expertise: Json | null
          id: string
          is_active: boolean | null
          name: string
          rating: number | null
          title: string | null
          total_sessions: number | null
        }
        Insert: {
          availability?: Json | null
          bio?: string | null
          company?: string | null
          created_at?: string
          email_id?: string | null
          experience_years?: number | null
          expertise?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          rating?: number | null
          title?: string | null
          total_sessions?: number | null
        }
        Update: {
          availability?: Json | null
          bio?: string | null
          company?: string | null
          created_at?: string
          email_id?: string | null
          experience_years?: number | null
          expertise?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          rating?: number | null
          title?: string | null
          total_sessions?: number | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          action_url: string | null
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: string | null
          user_id: string
        }
        Insert: {
          action_url?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type?: string | null
          user_id: string
        }
        Update: {
          action_url?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      offline_content: {
        Row: {
          content_type: string
          data: Json
          district: string
          id: string
          last_updated: string
          state: string
          version: number | null
        }
        Insert: {
          content_type: string
          data: Json
          district: string
          id?: string
          last_updated?: string
          state: string
          version?: number | null
        }
        Update: {
          content_type?: string
          data?: Json
          district?: string
          id?: string
          last_updated?: string
          state?: string
          version?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          academic_performance: string | null
          achievements: string[] | null
          career_goals: string[] | null
          class_grade: string | null
          created_at: string
          date_of_birth: string | null
          email: string | null
          full_name: string | null
          id: string
          interests: string[] | null
          location: string | null
          phone: string | null
          school_name: string | null
          skills: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          academic_performance?: string | null
          achievements?: string[] | null
          career_goals?: string[] | null
          class_grade?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          interests?: string[] | null
          location?: string | null
          phone?: string | null
          school_name?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          academic_performance?: string | null
          achievements?: string[] | null
          career_goals?: string[] | null
          class_grade?: string | null
          created_at?: string
          date_of_birth?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          interests?: string[] | null
          location?: string | null
          phone?: string | null
          school_name?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      quests: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          points: number | null
          requirements: Json | null
          rewards: Json | null
          sort_order: number | null
          title: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          points?: number | null
          requirements?: Json | null
          rewards?: Json | null
          sort_order?: number | null
          title: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          points?: number | null
          requirements?: Json | null
          rewards?: Json | null
          sort_order?: number | null
          title?: string
        }
        Relationships: []
      }
      quiz_results: {
        Row: {
          created_at: string
          id: string
          recommended_stream: string
          responses: Json
          roadmap: Json | null
          scores: Json
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          recommended_stream: string
          responses: Json
          roadmap?: Json | null
          scores: Json
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          recommended_stream?: string
          responses?: Json
          roadmap?: Json | null
          scores?: Json
          user_id?: string
        }
        Relationships: []
      }
      recommendations: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          external_url: string | null
          id: string
          is_viewed: boolean | null
          metadata: Json | null
          relevance_score: number | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          external_url?: string | null
          id?: string
          is_viewed?: boolean | null
          metadata?: Json | null
          relevance_score?: number | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          external_url?: string | null
          id?: string
          is_viewed?: boolean | null
          metadata?: Json | null
          relevance_score?: number | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      scholarships: {
        Row: {
          amount: string | null
          application_url: string
          category: string | null
          created_at: string
          deadline: string
          description: string | null
          eligibility: string | null
          id: string
          provider: string
          title: string
          updated_at: string
        }
        Insert: {
          amount?: string | null
          application_url: string
          category?: string | null
          created_at?: string
          deadline: string
          description?: string | null
          eligibility?: string | null
          id?: string
          provider: string
          title: string
          updated_at?: string
        }
        Update: {
          amount?: string | null
          application_url?: string
          category?: string | null
          created_at?: string
          deadline?: string
          description?: string | null
          eligibility?: string | null
          id?: string
          provider?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_id: string | null
          earned_at: string
          id: string
          points_earned: number | null
          user_id: string
        }
        Insert: {
          achievement_id?: string | null
          earned_at?: string
          id?: string
          points_earned?: number | null
          user_id: string
        }
        Update: {
          achievement_id?: string | null
          earned_at?: string
          id?: string
          points_earned?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      user_locations: {
        Row: {
          address: string | null
          city: string | null
          country: string | null
          created_at: string
          id: string
          is_primary: boolean | null
          latitude: number | null
          longitude: number | null
          state: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          id?: string
          is_primary?: boolean | null
          latitude?: number | null
          longitude?: number | null
          state?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          id?: string
          is_primary?: boolean | null
          latitude?: number | null
          longitude?: number | null
          state?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          accessibility_settings: Json | null
          created_at: string
          id: string
          notification_settings: Json | null
          parent_mode_enabled: boolean | null
          privacy_settings: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          accessibility_settings?: Json | null
          created_at?: string
          id?: string
          notification_settings?: Json | null
          parent_mode_enabled?: boolean | null
          privacy_settings?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          accessibility_settings?: Json | null
          created_at?: string
          id?: string
          notification_settings?: Json | null
          parent_mode_enabled?: boolean | null
          privacy_settings?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_quest_progress: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          points_earned: number | null
          progress: Json | null
          quest_id: string | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          points_earned?: number | null
          progress?: Json | null
          quest_id?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          points_earned?: number | null
          progress?: Json | null
          quest_id?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_quest_progress_quest_id_fkey"
            columns: ["quest_id"]
            isOneToOne: false
            referencedRelation: "quests"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      validate_password_strength: {
        Args: { password: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
