# frozen_string_literal: true

# Publication records always remain available to Liquid so they can appear in
# lists. Only records that explicitly opt in produce an HTML detail page.
Jekyll::Hooks.register :site, :post_read do |site|
  publications = site.collections["publications"]
  next unless publications

  publications.docs.each do |publication|
    detail_page = publication.data["detail_page"] == true
    publication.data["detail_page"] = detail_page

    next if detail_page

    publication.data["published"] = false
    publication.data["sitemap"] = false
    publication.instance_variable_set(:@write_p, false)
  end
end
