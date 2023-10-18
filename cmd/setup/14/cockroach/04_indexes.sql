CREATE INDEX IF NOT EXISTS es_active_instances ON eventstore.events2 (created_at DESC) STORING ("position");
CREATE INDEX IF NOT EXISTS es_wm ON eventstore.events2 (instance_id, aggregate_type, aggregate_id, event_type);
CREATE INDEX IF NOT EXISTS es_projection ON eventstore.events2 (instance_id, aggregate_type, event_type, "position");
CREATE INDEX IF NOT EXISTS es_global ON eventstore.events2 (aggregate_type, aggregate_id, event_type);