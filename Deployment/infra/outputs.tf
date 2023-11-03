/ A reference attribute to the google compute resource.
output "external_ip" {
  value = "${google_compute_instance.proj-instance.network_interface.0.access_config.0}"
}
