export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      exercise_sets: {
        Row: {
          created_at: string
          distance_meters: number | null
          duration_seconds: number | null
          exercise_id: string
          id: string
          notes: string | null
          reps: number | null
          set_number: number
          weight_kg: number | null
          workout_session_id: string
        }
        Insert: {
          created_at?: string
          distance_meters?: number | null
          duration_seconds?: number | null
          exercise_id: string
          id?: string
          notes?: string | null
          reps?: number | null
          set_number: number
          weight_kg?: number | null
          workout_session_id: string
        }
        Update: {
          created_at?: string
          distance_meters?: number | null
          duration_seconds?: number | null
          exercise_id?: string
          id?: string
          notes?: string | null
          reps?: number | null
          set_number?: number
          weight_kg?: number | null
          workout_session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercise_sets_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_sets_workout_session_id_fkey"
            columns: ["workout_session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      exercises: {
        Row: {
          created_at: string
          description: string | null
          difficulty_level: string | null
          equipment: string | null
          id: string
          instructions: string | null
          muscle_groups: string[] | null
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          equipment?: string | null
          id?: string
          instructions?: string | null
          muscle_groups?: string[] | null
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          equipment?: string | null
          id?: string
          instructions?: string | null
          muscle_groups?: string[] | null
          name?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          body_fat_percentage: number | null
          created_at: string
          date: string
          id: string
          muscle_mass_kg: number | null
          notes: string | null
          user_id: string
          weight_kg: number | null
        }
        Insert: {
          body_fat_percentage?: number | null
          created_at?: string
          date?: string
          id?: string
          muscle_mass_kg?: number | null
          notes?: string | null
          user_id: string
          weight_kg?: number | null
        }
        Update: {
          body_fat_percentage?: number | null
          created_at?: string
          date?: string
          id?: string
          muscle_mass_kg?: number | null
          notes?: string | null
          user_id?: string
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_plans: {
        Row: {
          created_at: string
          description: string | null
          difficulty_level: string | null
          duration_weeks: number | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_weeks?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_weeks?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workout_plans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_sessions: {
        Row: {
          calories_burned: number | null
          completed: boolean | null
          created_at: string
          date: string
          duration_minutes: number | null
          id: string
          name: string
          notes: string | null
          updated_at: string
          user_id: string
          workout_plan_id: string | null
        }
        Insert: {
          calories_burned?: number | null
          completed?: boolean | null
          created_at?: string
          date?: string
          duration_minutes?: number | null
          id?: string
          name: string
          notes?: string | null
          updated_at?: string
          user_id: string
          workout_plan_id?: string | null
        }
        Update: {
          calories_burned?: number | null
          completed?: boolean | null
          created_at?: string
          date?: string
          duration_minutes?: number | null
          id?: string
          name?: string
          notes?: string | null
          updated_at?: string
          user_id?: string
          workout_plan_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_sessions_workout_plan_id_fkey"
            columns: ["workout_plan_id"]
            isOneToOne: false
            referencedRelation: "workout_plans"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
