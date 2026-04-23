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
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      career_applications: {
        Row: {
          availability: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          internal_notes: string | null
          message: string | null
          phone: string | null
          resume_path: string | null
          role_applied: string
          status: string
          updated_at: string
          years_experience: string | null
        }
        Insert: {
          availability?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          internal_notes?: string | null
          message?: string | null
          phone?: string | null
          resume_path?: string | null
          role_applied: string
          status?: string
          updated_at?: string
          years_experience?: string | null
        }
        Update: {
          availability?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          internal_notes?: string | null
          message?: string | null
          phone?: string | null
          resume_path?: string | null
          role_applied?: string
          status?: string
          updated_at?: string
          years_experience?: string | null
        }
        Relationships: []
      }
      faq_questions: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          internal_notes: string | null
          phone: string | null
          question: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          internal_notes?: string | null
          phone?: string | null
          question: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          internal_notes?: string | null
          phone?: string | null
          question?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      partner_inquiries: {
        Row: {
          company_name: string
          created_at: string
          email: string
          full_name: string
          id: string
          internal_notes: string | null
          job_title: string | null
          message: string | null
          partner_type: string
          phone: string | null
          portfolio_size: string | null
          service_interests: string[]
          status: string
          updated_at: string
        }
        Insert: {
          company_name: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          internal_notes?: string | null
          job_title?: string | null
          message?: string | null
          partner_type: string
          phone?: string | null
          portfolio_size?: string | null
          service_interests?: string[]
          status?: string
          updated_at?: string
        }
        Update: {
          company_name?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          internal_notes?: string | null
          job_title?: string | null
          message?: string | null
          partner_type?: string
          phone?: string | null
          portfolio_size?: string | null
          service_interests?: string[]
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          access: string | null
          additional_info: string | null
          city: string | null
          company_name: string | null
          contact_method: string
          created_at: string
          email: string | null
          flexibility: string | null
          frequency: string | null
          full_name: string
          has_pets: string | null
          hear_about: string | null
          id: string
          internal_notes: string | null
          parking: string | null
          phone: string | null
          preferred_timing: string | null
          project_details: string | null
          property_type: string
          services: string[]
          square_footage: string | null
          state: string | null
          status: Database["public"]["Enums"]["quote_status"]
          street_address: string | null
          updated_at: string
          zip: string | null
        }
        Insert: {
          access?: string | null
          additional_info?: string | null
          city?: string | null
          company_name?: string | null
          contact_method: string
          created_at?: string
          email?: string | null
          flexibility?: string | null
          frequency?: string | null
          full_name: string
          has_pets?: string | null
          hear_about?: string | null
          id?: string
          internal_notes?: string | null
          parking?: string | null
          phone?: string | null
          preferred_timing?: string | null
          project_details?: string | null
          property_type: string
          services?: string[]
          square_footage?: string | null
          state?: string | null
          status?: Database["public"]["Enums"]["quote_status"]
          street_address?: string | null
          updated_at?: string
          zip?: string | null
        }
        Update: {
          access?: string | null
          additional_info?: string | null
          city?: string | null
          company_name?: string | null
          contact_method?: string
          created_at?: string
          email?: string | null
          flexibility?: string | null
          frequency?: string | null
          full_name?: string
          has_pets?: string | null
          hear_about?: string | null
          id?: string
          internal_notes?: string | null
          parking?: string | null
          phone?: string | null
          preferred_timing?: string | null
          project_details?: string | null
          property_type?: string
          services?: string[]
          square_footage?: string | null
          state?: string | null
          status?: Database["public"]["Enums"]["quote_status"]
          street_address?: string | null
          updated_at?: string
          zip?: string | null
        }
        Relationships: []
      }
      referral_submissions: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          referral_type: string
          referred_company_name: string | null
          referred_contact_name: string | null
          referred_customer_name: string | null
          referred_email: string | null
          referred_phone: string | null
          referrer_email: string
          referrer_name: string
          referrer_phone: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          referral_type: string
          referred_company_name?: string | null
          referred_contact_name?: string | null
          referred_customer_name?: string | null
          referred_email?: string | null
          referred_phone?: string | null
          referrer_email: string
          referrer_name: string
          referrer_phone?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          referral_type?: string
          referred_company_name?: string | null
          referred_contact_name?: string | null
          referred_customer_name?: string | null
          referred_email?: string | null
          referred_phone?: string | null
          referrer_email?: string
          referrer_name?: string
          referrer_phone?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_submit_public_form: { Args: never; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      quote_status: "new" | "contacted" | "quoted" | "won" | "lost"
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
    Enums: {
      app_role: ["admin", "user"],
      quote_status: ["new", "contacted", "quoted", "won", "lost"],
    },
  },
} as const
