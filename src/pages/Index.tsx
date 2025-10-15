import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setIsDialogOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      event: "",
      message: ""
    });
  };
  const exhibitions = [
    {
      id: 1,
      title: "Цветные метаморфозы",
      artist: "Анна Соколова",
      date: "15 октября - 30 ноября 2025",
      image: "https://cdn.poehali.dev/projects/5382062a-88fe-4868-a0a4-ed613401b159/files/27b78921-62cd-4e84-adf1-fb24f983536f.jpg",
      status: "active"
    },
    {
      id: 2,
      title: "Геометрия души",
      artist: "Дмитрий Волков",
      date: "20 октября - 15 декабря 2025",
      image: "https://cdn.poehali.dev/projects/5382062a-88fe-4868-a0a4-ed613401b159/files/d6ad5455-e0cc-482b-b635-19b604428d45.jpg",
      status: "active"
    }
  ];

  const artists = [
    {
      id: 1,
      name: "Анна Соколова",
      specialty: "Абстрактная живопись",
      image: "https://cdn.poehali.dev/projects/5382062a-88fe-4868-a0a4-ed613401b159/files/82204676-e500-489c-af0a-26e3d3a7abcb.jpg"
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      specialty: "Геометрический абстракционизм",
      image: "https://cdn.poehali.dev/projects/5382062a-88fe-4868-a0a4-ed613401b159/files/82204676-e500-489c-af0a-26e3d3a7abcb.jpg"
    },
    {
      id: 3,
      name: "Екатерина Петрова",
      specialty: "Экспрессионизм",
      image: "https://cdn.poehali.dev/projects/5382062a-88fe-4868-a0a4-ed613401b159/files/82204676-e500-489c-af0a-26e3d3a7abcb.jpg"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Мастер-класс по живописи",
      date: "25 октября 2025",
      time: "18:00",
      type: "Мероприятие"
    },
    {
      id: 2,
      title: "Открытие выставки \"Новые грани\"",
      date: "5 ноября 2025",
      time: "19:00",
      type: "Открытие"
    },
    {
      id: 3,
      title: "Встреча с художниками",
      date: "12 ноября 2025",
      time: "17:00",
      type: "Встреча"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ГАЛЕРЕЯ</h1>
          <div className="flex gap-8">
            <a href="#exhibitions" className="text-foreground hover:text-primary transition-colors">
              Выставки
            </a>
            <a href="#artists" className="text-foreground hover:text-primary transition-colors">
              Художники
            </a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors">
              События
            </a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              СОВРЕМЕННОЕ
              <br />
              РУССКОЕ
              <br />
              ИСКУССТВО
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Откройте для себя мир смелых форм, ярких красок и новых идей современных российских художников
            </p>
            <Button size="lg" className="text-lg px-8">
              Посетить галерею
            </Button>
          </div>
        </div>
      </section>

      <section id="exhibitions" className="py-20 px-6 bg-background/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Palette" size={36} className="text-primary" />
            <h3 className="text-5xl font-bold">Текущие выставки</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {exhibitions.map((exhibition) => (
              <Card key={exhibition.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-scale-in">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {exhibition.status === "active" ? "Идёт сейчас" : "Скоро"}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{exhibition.title}</h4>
                  <p className="text-lg text-muted-foreground mb-2">{exhibition.artist}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{exhibition.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="artists" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="Users" size={36} className="text-primary" />
            <h3 className="text-5xl font-bold">Наши художники</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <Card key={artist.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-1">{artist.name}</h4>
                  <p className="text-muted-foreground">{artist.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-r from-primary to-accent border-0 overflow-hidden relative animate-scale-in">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHpNNiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTYgNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            <CardContent className="p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-4xl font-bold text-primary-foreground mb-4">
                    Станьте частью искусства
                  </h3>
                  <p className="text-lg text-primary-foreground/90 max-w-xl">
                    Запишитесь на наши мероприятия: мастер-классы, открытия выставок и встречи с художниками
                  </p>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="secondary" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Регистрация на мероприятие</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="example@mail.ru"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="event">Мероприятие *</Label>
                        <Select
                          required
                          value={formData.event}
                          onValueChange={(value) => setFormData({ ...formData, event: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите мероприятие" />
                          </SelectTrigger>
                          <SelectContent>
                            {events.map((event) => (
                              <SelectItem key={event.id} value={event.title}>
                                {event.title} - {event.date}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Комментарий</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Дополнительная информация..."
                          rows={3}
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="events" className="py-20 px-6 bg-background/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <Icon name="CalendarDays" size={36} className="text-primary" />
            <h3 className="text-5xl font-bold">Будущие события</h3>
          </div>
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="bg-primary/10 rounded-lg p-4 text-center min-w-[80px]">
                      <div className="text-2xl font-bold text-primary">
                        {event.date.split(' ')[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {event.date.split(' ')[1]}
                      </div>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {event.type}
                      </Badge>
                      <h4 className="text-xl font-semibold mb-1">{event.title}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Регистрация на мероприятие</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Иван Иванов"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="example@mail.ru"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+7 (999) 123-45-67"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="event">Мероприятие *</Label>
                          <Select
                            required
                            value={formData.event}
                            onValueChange={(value) => setFormData({ ...formData, event: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите мероприятие" />
                            </SelectTrigger>
                            <SelectContent>
                              {events.map((event) => (
                                <SelectItem key={event.id} value={event.title}>
                                  {event.title} - {event.date}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Комментарий</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Дополнительная информация..."
                            rows={3}
                          />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          Отправить заявку
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">ГАЛЕРЕЯ</h4>
              <p className="text-background/80">
                Современное русское искусство в самом сердце города
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@gallery.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4">Часы работы</h5>
              <div className="space-y-2 text-background/80">
                <p>Вт-Вс: 11:00 - 20:00</p>
                <p>Пн: выходной</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;