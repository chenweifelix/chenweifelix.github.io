FROM ruby:3.2-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential git \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

COPY Gemfile ./
RUN gem install bundler --no-document \
    && bundle install

COPY . .

EXPOSE 4000 35729

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--strict_front_matter", "--config", "_config.yml,_config_docker.yml"]
