/ Configure a provider
provider "google" {
  project = "fifth-legacy-323003"
  credentials = file("credentials.json")
  region = "us-central1"
  zone = "us-central1-a"
}
// Configure a vpc network
resource "google_compute_network" "proj-vpc-network" {
name = "proj-vpc-network"
}
// Configure a google resource instance resource
resource "google_compute_instance" "proj-instance" {
  name         = "proj-instance"
  machine_type = "n1-standard-2"
  zone         = "us-central1-a"
  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2004-lts"
    }
  }
  network_interface {
    network = google_compute_network.proj-vpc-network.name
    // Creates external Ip address.
    access_config {
    }
  }
  // Used to assign a ssh public key.
  metadata = {
  }
}
//  Create firewall rule to allow port 22(ssh)
resource "google_compute_firewall" "ssh-rule" {
  name = "proj-ssh"
  network = google_compute_network.proj-vpc-network.name
  allow {
    protocol = "tcp"
    ports = ["22"]
    }
  target_tags = ["proj-instance"]
  source_ranges = ["0.0.0.0/0"]
}
