export class Contact {
  constructor({ _id, username, email, image, videos = [] }) {
    this.id = _id;
    this.username = username;
    this.email = email;
    this.image = image;
    this.videos = videos;
  }
}
